import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { graphql } from 'gatsby';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';

import SEO from '../components/seo';
import SnipGrid from '../components/snipGrid';
import LinkButton from '../components/linkButton';

const PrevButton = ({ currentPage }) => {
  const prevPage = +currentPage - 1;

  const prevLink = `/snips${prevPage > 1 ? `/${prevPage}` : ''}`;

  return <LinkButton to={prevLink} label="Previous" />;
};
const SnipsPage = ({
  pageContext: { hasNextPage, hasPreviousPage, currentPage, ids, mdxIds },
  data: { allInstaNode },
}) => (
  <>
    <SEO title="Front-end Snips ✂️" description="Handy front end code snippets" />
    <PageWrap>
      <HtmlContent>
        <Heading>Helpful Front-end Snips ✂️</Heading>
        <Paragraph fill>
          <a href="https://www.instagram.com/frontendsnips/">Instagram</a> account I setup to share front-end code
          snippets.
        </Paragraph>
        <SnipGrid edges={allInstaNode.edges} mdx={mdxIds} />
      </HtmlContent>
      <Box direction="row" justify="center" gap="medium" pad="large">
        {hasPreviousPage && <PrevButton currentPage={currentPage} />}
        {hasNextPage && <LinkButton to={`/snips/${+currentPage + 1}`} label="Next" />}
      </Box>
    </PageWrap>
  </>
);

export default SnipsPage;

export const query = graphql`
  query GET_SNIPS($ids: [String]) {
    allInstaNode(filter: { id: { in: $ids } }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 460, maxHeight: 460, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
