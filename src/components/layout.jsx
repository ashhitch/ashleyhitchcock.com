import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Grommet } from 'grommet';
import theme, { GlobalStyle, StyledWrap } from './theme';
import Header from './header';
import Footer from './footer';
import Main from './main';
import GitHub from './gitHub';
import useDarkMode from 'use-dark-mode';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { value: dark } = useDarkMode(false);
  const themeDets = { ...theme, dark, darkMode: dark };

  return (
    <>
      <Grommet theme={themeDets} full themeMode={dark ? 'dark' : 'light'} background={dark ? 'dark-2' : 'dark-1'}>
        <GlobalStyle dark={dark} />
        <StyledWrap dark={dark}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <GitHub />
          <Main>{children}</Main>
          <Footer />
        </StyledWrap>
      </Grommet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
