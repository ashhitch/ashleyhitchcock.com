import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;
export default Main;
