import styled from 'styled-components';

export const IconGridStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  width: 100%;
  padding: 0;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 800px;


`;
export const IconGridItemStyle = styled.div`
  text-align: center;
  max-width: 140px;
  height: auto;
  padding: 10px;

    @media(min-width: 768px) {
  padding: 20px;
      max-width: 180px;
    }


  svg {
    width: 100%;

    height: auto;
  }
  svg {
    transition: transform 0.2s ease-in;

    path,
    circle {
      fill: ${props => props.theme.global.colors['dark-1']};
      transition: fill 0.2s ease-in;
    }
  }
  &:hover svg {
    transform: scale(1.1);
  }
  &:hover svg path,
  &:hover svg circle {
    fill: ${props => props.brandbg};
  }
`;
