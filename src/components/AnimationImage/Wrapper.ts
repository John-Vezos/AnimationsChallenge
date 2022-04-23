import styled, { css, keyframes } from '@styles/styled-components';
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

interface Props {
  anim_delay?: number;
  anim_duration?: number;
  disableBackground?: boolean;
}
const Wrapper = styled.span<Props>`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props =>
    props.disableBackground ? 'transparent' : 'darkgray'};

  background-color: ${props =>
    props.disableBackground &&
    css`
      & svg {
        z-index: -1;
      }
    `};

  & svg {
    color: ${props => props.theme.primary};
    width: 100px;
    position: absolute;
  }

  & > img {
    animation: ${props => props.anim_duration}ms ${fadeIn} forwards;
    opacity: 0;

    ${props =>
      props.anim_delay &&
      css`
        -webkit-animation-delay: ${props.anim_delay}ms;
        animation-delay: ${props.anim_delay}ms;
      `};
  }
`;

export default Wrapper;
