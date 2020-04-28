import styled from 'styled-components';
import { Box } from 'grommet';

const IntroWrap = styled(Box)`
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.global.colors['light-4']};

  @media(min-width: 992px) {
    align-self: center;
    max-width: 95%;
    position: relative;
  }


  &:before {
    transform: rotate(-1.75deg);
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.global.colors['light-2']};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 1350ms cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: 400ms;
    border-radius: 2px;

    /* @media (prefers-color-scheme: dark) {
      background-color: ${props => props.theme.grey};
    } */
  }

  .content {
    color: ${props => props.theme.global.colors['dark-1']};
position: relative;
margin: 0 auto;
@media(min - width: 992px) {
  max - width: 80 %;
}
    
  }
`;

export default IntroWrap;
