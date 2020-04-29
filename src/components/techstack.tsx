import React from 'react';
import { Heading, Box } from 'grommet';

import useDarkMode from 'use-dark-mode';
import { IconGridStyle, IconGridItemStyle } from './iconGrid';

import CssIcon from '../images/icons/css.svg';
import JavascriptIcon from '../images/icons/javascript.svg';
import NodeIcon from '../images/icons/node.svg';
import ReactIcon from '../images/icons/r.svg';
import WordPressIcon from '../images/icons/wordpress.svg';
import GatsbyIcon from '../images/icons/gatsby.svg';
import GraphqlIcon from '../images/icons/graphql.svg';

const Techstack = () => {
  const darkMode = useDarkMode(false);
  return (
    <Box align="center">
      <Heading level="2">Technologies I love</Heading>
      <IconGridStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#F7DF1E">
          <JavascriptIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#61DAFB">
          <ReactIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#639">
          <GatsbyIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#21759B">
          <WordPressIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#339933">
          <NodeIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#1572B6">
          <CssIcon />
        </IconGridItemStyle>
        <IconGridItemStyle dark={darkMode.value} brandbg="#e10098">
          <GraphqlIcon />
        </IconGridItemStyle>
      </IconGridStyle>
    </Box>
  );
};

export default Techstack;
