import React from 'react';
import styled, { css } from 'styled-components';
import { Github, Instagram, Linkedin, Twitter } from 'grommet-icons';

const SocialStyle = styled.nav`
  ${props => css`
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0px;
      margin: 0;

      li + li {
        margin-left: 1.5rem;
      }

      li {
        text-align: center;
        width: 1.5rem;

        svg {
          max-width: 100%;
          height: auto;
        }

        a svg {
          transition: transform 0.2s ease-in;
          fill: ${props.theme.darkMode ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
          path {
            transition: fill 0.2s ease-in;
            fill: ${props.theme.darkMode ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
     
        }
        a:hover svg {
          transform: scale(1.1);
        }
        a:hover svg path {
          fill: ${props.theme.global.colors['accent-1']};

        }
      }
    }
  `};
`;
const SocialBar = () => (
  <SocialStyle>
    <ul>
      <li>
        <a href="https://github.com/ashhitch" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Ash_Hitchcock" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ashhitchcock/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ash_hitch/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
      </li>
    </ul>
  </SocialStyle>
);

export default SocialBar;
