import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const HtmlContent = styled(Box)`
   
    a {
        color: ${props => props.theme.global.colors['dark-1']};
        position: relative;
    display: inline-block;
    text-decoration: none;
    z-index: 1;
    padding: 2px 5px;

    &:after {
      display: block;
      content: '';
      background: ${props => props.theme.global.colors['accent-1']};
      height: 1ex;

      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: -1;
      transition: all 0.2s ease-in-out;
      bottom: 0;
      transform: rotate(3deg);
      border-radius: 2px;
      width: 100%;
    }

    &:hover:after {
      transform: rotate(2deg);
      bottom: 0;
      width: 10%;
    }
    &:nth-child(odd):hover:after {
      transform: rotate(-2deg);
    }
    }
`;

export default HtmlContent;
