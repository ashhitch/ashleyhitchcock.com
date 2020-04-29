import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Text } from 'grommet';
import CookieConsent from 'react-cookie-consent';
import useDarkMode from 'use-dark-mode';
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
const Footer = () => {
  const darkMode = useDarkMode(false);
  return (
    <StyledFooter>
      <CookieConsent
        location="bottom"
        acceptOnScroll
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={darkMode.value ? { background: '#555', color: '#fff' } : { background: '#222', color: '#fff' }}
        buttonStyle={{ background: '#bada55' }}
        acceptOnScrollPercentage={10}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <SocialBar />
      <Toogle />
      <Text>
        <span role="img" aria-label="Made">
          🛠️
        </span>{' '}
        with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        by Ash Hitchcock © {dt.getFullYear()} | <Link to="/uses">Uses</Link>
      </Text>
    </StyledFooter>
  );
};

export default Footer;
