import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Text } from 'grommet';
import SocialBar from './socialBar';
import Toogle from './toggle';

const StyledFooter = styled.footer`
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const dt = new Date();
const Footer = () => (
  <StyledFooter>
    <SocialBar />
    <Toogle />
    <Text>
      © {dt.getFullYear()} Ash Hitchcock | <Link to="/uses">Uses</Link>
    </Text>
  </StyledFooter>
);

export default Footer;
