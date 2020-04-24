import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Box } from 'grommet';
import Img from 'gatsby-image';

const StyledMain = styled.main`
display: flex;

`;

const SnipGrid = ({ children }) => {
  const { allInstaNode: { edges } } = useStaticQuery(graphql`
    query {
    allInstaNode {
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
              fluid(maxWidth: 460, maxHeight: 460) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
   
        }
      }
    }
  }
`);

  return (
    <Box gap="small" wrap direction="row">
      {/* <pre>{JSON.stringify(edges, null, 2)}</pre> */}
      {edges.map(({ node }) => (<Box flex margin={{ bottom: 'small' }} width={{ max: '452px' }} basis="1/2">
        <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank">
          <Img fluid={node.localFile.childImageSharp.fluid} alt={node.caption} />
        </a>
      </Box>))}
    </Box>
  );
};
export default SnipGrid;
