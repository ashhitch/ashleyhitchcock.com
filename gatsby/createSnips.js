/* eslint-disable array-callback-return */
const path = require('path');

module.exports = async ({ actions, graphql }) => {
  const PER_PAGE = 8;
  const GET_SNIPS = `
  query GET_SNIPS($limit:Int $skip:Int){
      allInstaNode(
        limit: $limit 
        skip:$skip
      ) {
        pageInfo {
      currentPage
      itemCount
      hasPreviousPage
      hasNextPage
      pageCount
      perPage
    }
        edges {
          node {
            id
          }
        }
      }
  }
  `;
  const GET_SNIP = `
  query GET_SNIP($id: String){
    mdx(frontmatter: {id: {eq: $id}}) {
      id
      frontmatter {
        slug
      }
    }
  }
  `;
  const { createPage } = actions;
  const allPosts = [];
  const snipPages = [];
  let pageNumber = 0;

  const fetchSnip = async variables => graphql(GET_SNIP, variables).then(({ data }) => data);

  const fetchPosts = async variables =>
    graphql(GET_SNIPS, variables).then(async ({ data }) => {
      const {
        allInstaNode: {
          edges,
          pageInfo: { hasNextPage, hasPreviousPage, currentPage },
        },
      } = data;

      const mdxIds = [];
      const thePosts = edges.map(async post => {
        const { mdx } = await fetchSnip({ id: post.node.id });

        if (!mdx) {
          return;
        }

        const { node } = post;

        node.mdxId = mdx.id;
        node.slug = mdx.frontmatter.slug;

        mdxIds.push({
          id: post.node.id,
          mdxId: mdx.id,
          slug: mdx.frontmatter.slug,
        });

        const theData = {
          ...post,
          node,
        };
        allPosts.push(theData);
      });
      await Promise.all(thePosts);

      const nodeIds = edges.map(edge => edge.node.id);
      const snipTemplate = path.resolve('./src/templates/snips.tsx');
      const snipPagePath = !variables.skip ? '/snips' : `/snips/${pageNumber + 1}`;

      snipPages[pageNumber] = {
        path: snipPagePath,
        component: snipTemplate,
        context: {
          ids: nodeIds,
          mdxIds,
          pageNumber,
          hasNextPage,
          hasPreviousPage,
          currentPage,
        },
        ids: nodeIds,
      };

      if (hasNextPage) {
        pageNumber++;
        const skip = pageNumber * PER_PAGE;
        return fetchPosts({ limit: PER_PAGE, skip });
      }
      return allPosts;
    });

  await fetchPosts({ limit: PER_PAGE, skip: 0 }).then(allPosts => {
    const postTemplate = path.resolve('./src/templates/snip.tsx');

    snipPages.map(snipPage => {
      console.log(`create SnipPage ${snipPage.context.pageNumber}`);
      createPage(snipPage);
    });

    allPosts.map(post => {
      console.log(`create snip: ${post.node.slug}`);
      createPage({
        path: `/snip/${post.node.slug}/`,
        component: postTemplate,
        context: post,
      });
    });
  });
};
