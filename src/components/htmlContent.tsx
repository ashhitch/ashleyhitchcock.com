import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grommet';

const StyledHtmlContent = styled(Box)`
  ${(props) => css`
    ${props.lightOnly
      ? css`
          color: ${props.theme.global.colors['dark-1']};
        `
      : css`
          color: ${props.theme.darkMode ? props.theme.global.colors['light-1'] : props.theme.global.colors['dark-1']};
        `}
    ul {
      padding-left: 22px;
      li {
        margin: 6px 0;
      }
    }

    a {
      color: inherit;

      position: relative;
      display: inline-block;
      text-decoration: none;
      z-index: 1;
      padding: 2px 5px;

      &:after {
        will-change: transform;
        display: block;
        content: '';
        background: ${props.theme.global.colors['accent-1']};
        height: 0.8ex;

        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: -1;
        transition: all 0.2s ease-in-out;
        bottom: 0;
        transform: rotate(2deg);
        border-radius: 2px;
        width: 100%;
      }

      &:hover:after {
        transform: rotate(1deg);
        bottom: 0;
        width: 10%;
      }
      &:nth-child(odd):hover:after {
        transform: rotate(-1deg);
      }
    }
  `}
`;

interface HTMLProps {
  lightOnly?: boolean;
}

const HtmlContent: FC<HTMLProps> = ({ lightOnly, children }) => (
  <StyledHtmlContent lightOnly={lightOnly}>{children}</StyledHtmlContent>
);

export default HtmlContent;
