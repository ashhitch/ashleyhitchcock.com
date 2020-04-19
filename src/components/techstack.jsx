import React from 'react';
import { Heading } from 'grommet';
import { Box } from 'grommet';

import { IconGridStyle, IconGridItemStyle } from './iconGrid';

import CssIcon from './../images/icons/css.svg';
import JavascriptIcon from './../images/icons/javascript.svg';
import NodeIcon from './../images/icons/node.svg';
import ReactIcon from './../images/icons/r.svg';
import WordPressIcon from './../images/icons/wordpress.svg';
import GatsbyIcon from './../images/icons/gatsby.svg';

const Techstack = () => (
  <Box align="center">
    <Heading level="2">Technologies I love</Heading>
    <IconGridStyle>
      <IconGridItemStyle brandbg="#F7DF1E">
        <JavascriptIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#61DAFB">
        <ReactIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#639">
        <GatsbyIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#21759B">
        <WordPressIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#339933">
        <NodeIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#1572B6">
        <CssIcon />
      </IconGridItemStyle>
    </IconGridStyle>
  </Box>
);

export default Techstack;
