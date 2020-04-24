import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled, { css } from 'styled-components';
import { Twemoji as Emoji } from 'react-emoji-render';

const StyledDarkmode = styled.div`
  display: flex;
  margin: 0 auto  20px auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 4px;
`;

const StyledDarkmodeButton = styled.button`
  ${props => css`
    font-size: 1.2em;
    background: none;
    border: none;
    opacity: ${props.dark ? '0.2' : '1'};
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 0 4px;

    &:last-child {
      opacity: ${props.dark ? '1' : '0.2'};
    }

    &:focus {
      outline: none;
    }
  `}
`;

const StyledToggle = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;

  input {
    width: 40px;
    height: 10px;
    background: #555;
    position: relative;
    border-radius: 5px;
    appearance: none;
    cursor: pointer;
    outline: none;

    &:checked + label {
      left: 30px;
    }

    &:focus-visible {
      outline: solid 2px white;
    }

    & + label {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
      position: absolute;
      left: 2px;
      background: #fff;
      opacity: 0.9;
      background-color: #f6f6f6;
    }
  }
`;

const Toggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <StyledDarkmode>
      <StyledDarkmodeButton
        dark={darkMode.value}
        type="button"
        onClick={darkMode.disable}
      >
        <Emoji text="☀️" />
      </StyledDarkmodeButton>
      <StyledToggle>
        <input
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          id="dmcheck"
        />
        <label htmlFor="dmcheck" />
      </StyledToggle>
      <StyledDarkmodeButton
        dark={darkMode.value}
        type="button"
        onClick={darkMode.enable}
      >
        <Emoji text="🌗" />
      </StyledDarkmodeButton>
    </StyledDarkmode>
  );
};

export default Toggle;
