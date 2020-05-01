import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const StyledWrap = styled(Box)`
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }
`;
const StyledItem = styled(Box)`
  padding: 10px;
  @media (min-width: 600px) {
    flex-basis: 50%;
    max-width: 460px;
  }
`;
const StyledImg = styled(Img)`
  border-radius: 6px;
  overflow: hidden;
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
    <StyledWrap gap="small">
      {/* <pre>{JSON.stringify(edges, null, 2)}</pre> */}
      {edges &&
        edges.map(({ node }) => (
          <StyledItem flex key={node.id} margin={{ bottom: 'small' }}>
            {hasMdx(node.id) ? (
              <Link to={`/snip/${hasMdx(node.id)}`}>
                <StyledImg fluid={node.localFile.childImageSharp.fluid} alt={genTitle(node.caption)} />
              </Link>
            ) : (
              <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank" rel="noopener noreferrer">
                <StyledImg fluid={node.localFile.childImageSharp.fluid} alt={genTitle(node.caption)} />
              </a>
            )}

            <Box pad="xsmall">
              <Heading level="3">{genTitle(node.caption)}</Heading>
            </Box>
          </StyledItem>
        ))}
    </StyledWrap>
  );
};
export default SnipGrid;
