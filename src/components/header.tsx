import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import Menu from './menu';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0.35turn);
  }
  20%, 50%, 80% {
    transform: translateY(0) rotate(0.50turn);
  }
  40% {
    transform: translateY(-20px) rotate(0.35turn);
  }
  60% {
    transform: translateY(-12px) rotate(0.75turn);
  }
`;

const StyledLogo = styled.span`
  ${props => css`
    font-size: 2.8rem;
    position: relative;
    z-index: 2;
    margin-left: 2px;
    font-weight: 700;
      color: ${props.dark ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
    a {
      padding: 0 0.5ex 0 0;
      color: ${props.dark ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      span {
        position: absolute;
        right: 0;
        bottom: 4px;
        display: block;
        transition: all 0.2s ease-in;
        transform: translateY(0) rotate(0.35turn);
        animation-duration: 1.2s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        width: 0.5ex;
        height: 0.5ex;
        display: block;
        background-color: ${props.theme.global.colors['accent-1']};
      }
      &:hover span,
      &.is-loading span {
        animation-name: ${bounce};
      }
    }
  `}
`;
const StyledHeader = styled.header`
  ${props => css`
    position: sticky;
    top: 16px;
    z-index: 5;
    background: ${props.dark ? props.theme.global.colors['dark-1'] : props.theme.global.colors['light-1']};
 
  
    .bar {
      padding: 1rem 0 0 0;
      @media (min-width: 768px) {
        display: grid;
        justify-content: space-between;
        align-items: stretch;
        grid-template-columns: auto 1fr;
      }
      @media (min-width: 992px) {
        padding: 2rem 0;
      }
    }
  `};
`;

const Header = ({ siteTitle }) => {
  const darkMode = useDarkMode(false);
  return (
    <>
      <StyledHeader dark={darkMode.value}>
        <div className="bar">
          <StyledLogo dark={darkMode.value}>
            <Link to="/">
              AH
                            <span />
            </Link>
          </StyledLogo>
          <Menu />
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;