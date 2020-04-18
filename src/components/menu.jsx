import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes, css } from 'styled-components';

const menuAni = keyframes`
  0%{transform: rotate(3deg);}
  50%{transform: rotate(0deg);}
  100%{transform: rotate(3deg);}
  `;

const StyledMenu = styled.div`
  ${props => css`
  .menu {
    width: 100%;
    background: transparent;
    margin: 0;
    padding: 0;
    .nav {
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
      @media (min-width: 99px) {
      justify-content: flex-end;
      overflow-x: visible;
      }
    .nav li {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
      padding: 0 0.75rem;
      @media (min-width: 99px) {
      padding: 0 1rem;
    }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    .nav a {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      background-color: transparent;
      color: ${props.theme.global.colors['light-1']};
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem 0;
      &:after {
        display: block;
        content: "";
        background: ${props.theme.global.colors['dark-1']};
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
    }
  }
  `}
`;
const Menu = props => {
    return (
        <StyledMenu>
            <nav className="menu" aria-label="Main navigation">
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Open Source</Link>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </StyledMenu>
    );
};

export default Menu;
