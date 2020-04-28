const path = require('path');
const slugify = require('slugify');


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


            const nodeIds = edges.map( (edge) => console.log(edge) || edge.node.id);
            const snipTemplate = path.resolve('./src/templates/snips.jsx');
            const snipPagePath = !variables.skip ? '/snips' : `/snips/${pageNumber}`;
            console.log(snipPagePath);

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
                return fetchPosts({ limit: PER_PAGE, skip: pageNumber * PER_PAGE });
            }
            return allPosts;
        });

    await fetchPosts({ limit: PER_PAGE, skip: 0 }).then(allPosts => {
        // const postTemplate = path.resolve('./src/templates/snip.tsx');

        snipPages.map(snipPage => {
            console.log(`createSnipPage ${snipPage.context.pageNumber}`);
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
