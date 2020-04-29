import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const StyledPageWrap = styled(Box)`
  width: 100%;
  max-width: 930px;
`;

const PageWrap = ({ children }) => <StyledPageWrap alignSelf="center">{children}</StyledPageWrap>;

export default PageWrap;
