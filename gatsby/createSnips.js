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
  const { createPage } = actions;
  const allPosts = [];
  const snipPages = [];
  let pageNumber = 0;

  const fetchPosts = async variables =>
    graphql(GET_SNIPS, variables).then(({ data }) => {
      const {
        allInstaNode: {
          edges,
          pageInfo: { hasNextPage, hasPreviousPage, currentPage },
        },
      } = data;

      const nodeIds = edges.map(edge => edge.node.id);
      const snipTemplate = path.resolve('./src/templates/snips.tsx');
      const snipPagePath = !variables.skip ? '/snips' : `/snips/${pageNumber + 1}`;

      snipPages[pageNumber] = {
        path: snipPagePath,
        component: snipTemplate,
        context: {
          ids: nodeIds,
          pageNumber,
          hasNextPage,
          hasPreviousPage,
          currentPage,
        },
        ids: nodeIds,
      };
      edges.map(post => {
        allPosts.push(post);
      });
      if (hasNextPage) {
        pageNumber++;
        const skip = pageNumber * PER_PAGE;
        console.log({ skip });
        return fetchPosts({ limit: PER_PAGE, skip });
      }
      return allPosts;
    });

  await fetchPosts({ limit: PER_PAGE, skip: 0 }).then(allPosts => {
    // const postTemplate = path.resolve('./src/templates/snip.tsx');

    console.log(snipPages);

    snipPages.map(snipPage => {
      console.log(`create SnipPage ${snipPage.context.pageNumber}`);
      createPage(snipPage);
    });

    // allPosts.map(post => {
    //     console.log(`create post: ${post.uri}`);
    //     createPage({
    //         path: `/snip/${post.uri}/`,
    //         component: postTemplate,
    //         context: post,
    //     });
    // });
  });
};
