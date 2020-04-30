import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const StyledMain = styled.main`
  display: flex;
`;
const genTitle = title => {
  const reg = /(\.|\.\s)\1+/gi;
  const [newTitle] = title.split('#');
  return newTitle.replace(reg, '').trim();
};

const SnipGrid = ({ edges, mdx }) => {
  const hasMdx = id => {
    if (!mdx) {
      return;
    }
    const [data] = mdx.filter(item => item.id === id);
    if (data) {
      return data.slug;
    }
  };
  return (
    <Box gap="small" wrap direction="row">
      {/* <pre>{JSON.stringify(edges, null, 2)}</pre> */}
      {edges &&
        edges.map(({ node }) => (
          <Box flex key={node.id} margin={{ bottom: 'small' }} width={{ max: '452px' }} basis="1/2">
            {hasMdx(node.id) ? (
              <Link to={`/snip/${hasMdx(node.id)}`}>
                <Img fluid={node.localFile.childImageSharp.fluid} alt={genTitle(node.caption)} />
              </Link>
            ) : (
              <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank" rel="noopener noreferrer">
                <Img fluid={node.localFile.childImageSharp.fluid} alt={genTitle(node.caption)} />
              </a>
            )}

            <Box pad="xsmall">
              <Heading level="3">
                {node.id} - {genTitle(node.caption)}
              </Heading>
            </Box>
          </Box>
        ))}
    </Box>
  );
};
export default SnipGrid;
