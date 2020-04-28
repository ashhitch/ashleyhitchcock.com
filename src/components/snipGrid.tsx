import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import Img from 'gatsby-image';

const StyledMain = styled.main`
display: flex;

`;

const SnipGrid = ({ edges }) => {


  return (
    <Box gap="small" wrap direction="row">
      {/* <pre>{JSON.stringify(edges, null, 2)}</pre> */}
      {edges && edges.map(({ node }) => (<Box flex key={node.id} margin={{ bottom: 'small' }} width={{ max: '452px' }} basis="1/2">
        <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank">
          <Img fluid={node.localFile.childImageSharp.fluid} alt={node.caption} />
        </a>
      </Box>))}
    </Box>
  );
};
export default SnipGrid;
