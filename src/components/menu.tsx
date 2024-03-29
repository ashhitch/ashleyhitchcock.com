import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'gatsby';
import { Box } from 'grommet';

const menuAni = keyframes`
  0%{transform: rotate(3deg);}
  50%{transform: rotate(0deg);}
  100%{transform: rotate(3deg);}
  `;

const StyledMenu = styled.nav`
  width: 100%;
  background: transparent;
  margin: 0;
  padding: 0;
`;
const StyledNavList = styled.ul`
  ${(props) => css`
  
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding: 0;
      margin: 0;
      list-style: none;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      overflow-y: visible;
      white-space: nowrap;
      @media (min-width: 768px) {
      justify-content: flex-end;
      overflow-x: visible;
      padding-right: 20px;
      }
     li {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
      padding: 0 0.5rem;
      @media (min-width: 768px) {
      padding: 0 1rem;
    }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
 li a {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      background-color: transparent;
      color: ${props.theme.darkMode ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem 0;
      &:after {
        will-change: transform;
        display: block;
        content: "";
        background: ${
          props.theme.darkMode ? props.theme.global.colors['dark-1'] : props.theme.global.colors['light-1']
        };
        height: 0.6ex;
        position: absolute;
        left: -5%;
        right: 90%;
        bottom: 15px;
        z-index: -1;
        transition: all 0.2s ease-in-out;
        transform: rotate(2deg);
        border-radius: 2px;
      }
      &.is-active:after {
        background: ${props.theme.global.colors['accent-1']};
        animation: ${menuAni} 1s ease 2;
        right: -5%;
      }
      &:hover:after {
        transform: rotate(4deg);
        background: ${props.theme.global.colors['accent-1']};
        right: -5%;
      }
    
  `}
`;
const Menu = (props) => (
  <Box>
    <StyledMenu aria-label="Main navigation">
      <StyledNavList>
        <li>
          <Link activeClassName="is-active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="is-active" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link activeClassName="is-active" to="/open-source">
            Open Source
          </Link>
        </li>
        <li>
          <Link activeClassName="is-active" to="/snips">
            Snips
          </Link>
        </li>
      </StyledNavList>
    </StyledMenu>
  </Box>
);

export default Menu;
