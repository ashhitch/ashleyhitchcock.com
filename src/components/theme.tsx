import styled, { css, createGlobalStyle } from 'styled-components';

import { Link } from 'gatsby';
import styledNormalize from 'styled-normalize';

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const colors = {
  placeholder: '#000',
  brand: '#222222',
  'accent-1': '#bada55',
  'light-1': '#FFFFFF',
  'dark-1': '#222222',
  background: {
    dark: '#fff',
    light: '#222',
  },
};
export const base = {
  name: 'default',
  rounding: 4,
  spacing: 24,

  global: {
    colors,
    font: {
      family: '"Share Tech Mono", monospace',
    },
    control: {
      border: {
        radius: '4px',
      },
    },
    input: {
      weight: 400,
    },
  },
  anchor: {},
  text: {
    extend: props => css`
      a {
        color: ${props.theme.darkMode ? colors['light-1'] : colors['dark-1']};
        position: relative;
        display: inline-block;
        text-decoration: none;
        z-index: 1;
        padding: 2px 5px;

        &:after {
          display: block;
          content: '';
          background: ${colors['accent-1']};
          height: 0.8ex;

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
    `,
  },
  heading: {
    extend: props => css`
      z-index: 1;
      position: relative;
      &:after {
        display: block;
        content: '';
        background: ${colors['accent-1']};
        height: 0.6ex;
        position: absolute;
        left: -2px;
        bottom: -2px;
        z-index: -1;
        transform: rotate(4deg);
        border-radius: 2px;
        width: 80px;
      }
    `,
  },
  button: {
    extend: props => css`
      text-transform: uppercase;
      color: ${props.theme.darkMode ? colors['light-1'] : colors['dark-1']};
      svg {
        fill: ${props.theme.darkMode ? colors['light-1'] : colors['dark-1']};
      }
      &:after {
        content: none;
      }
    `,
  },
};

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize}
 * {
    box-sizing: border-box;
 }

 body {
   ${props => css`
     padding: 0;
     margin: 0;
     background-size: 400% 400%;
     background: ${props.dark ? props.theme.global.colors['dark-2'] : props.theme.global.colors['dark-1']};

     width: 100%;
     transition: background 0.2s ease-in;
     &:before,
     &:after {
       transition: background 0.2s ease-in;
       background-color: ${props.dark ? props.theme.global.colors['dark-2'] : props.theme.global.colors['dark-1']};
       animation: inherit;
       content: '';
       display: block;
       height: 1rem;
       left: 0;
       right: 0;
       position: fixed;
       width: 100%;
       z-index: 80;
     }
     &:before {
       top: 0;
     }
     &:after {
       bottom: 0;
     }

     ::selection {
       background-color: ${props.theme.global.colors['accent-1']};
       color: ${props.theme.global.colors['dark-1']};
     }
   `}
   


 }

`;
export const StyledLink = styled(Link)`
  border-bottom: 1px dotted #222;
  &:hover {
    border-bottom-style: solid;
  }
`;
export const StyledWrap = styled.div`
  ${props => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    background-color: ${props.dark ? props.theme.global.colors['dark-1'] : props.theme.global.colors['light-1']};
    color: ${props.dark ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
    min-height: 100vh;
    margin: 1rem;
    overflow: hidden;
  `}
`;

export default deepMerge(grommet, { ...base });
