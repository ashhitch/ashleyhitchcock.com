import React, { useState, useEffect } from 'react';
import { Grommet } from 'grommet';
import useDarkMode from 'use-dark-mode';
import theme, { GlobalStyle, StyledWrap } from './theme';
import Header from './header';
import Footer from './footer';
import Main from './main';
import GitHub from './gitHub';

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    if (dark !== darkMode.value) {
      setDark(darkMode.value);
    }
  }, [darkMode, dark]);
  // const dark = false;
  const themeDets = { ...theme, dark, darkMode: dark };

  return (
    <>
      <Grommet theme={themeDets} full background={dark ? 'dark-2' : 'dark-1'}>
        <GlobalStyle />
        <StyledWrap>
          <Header />
          <GitHub />
          <Main>{children}</Main>
          <Footer />
        </StyledWrap>
      </Grommet>
    </>
  );
};

export default Layout;
