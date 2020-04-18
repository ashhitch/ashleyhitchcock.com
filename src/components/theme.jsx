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
  heading: {
    extend: props => css`
    z-index: 1;
    position: relative;
       &:after {
        display: block;
        content: "";
        background: ${colors['accent-1']};
        height: 0.4ex;
        position: absolute;
        left: -2px;
        bottom: -2px;
        z-index: -1;
        transform: rotate(2deg);
        border-radius: 2px;
        width: 90px;
      }
    `,

  },
  button: {
    extend: props => css`
      text-transform: uppercase;
    `,
  },
};

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize}
 * {
    box-sizing: border-box;
 }

 body {
  ${props => console.log(props.theme)}
   ${props => css`
     padding: 0;
     margin: 0;
     background-size: 400% 400%;
     background: ${props.theme.global.colors['dark-1']};

     width: 100%;
     transition: background 0.2s ease-in;
     &:before,
     &:after {
       transition: background 0.2s ease-in;
       background-color: ${props.theme.global.colors['dark-1']};
       animation: inherit;
       content: "";
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
    background-color: ${props.theme.global.colors['light-1']};
    color: ${props.theme.global.colors['dark-1']};
    min-height: 100vh;
    margin: 1rem;
  `}
`;

export default deepMerge(grommet, { ...base });
