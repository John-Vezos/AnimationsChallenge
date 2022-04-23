import styled, { css, keyframes } from '@styles/styled-components';

interface Props {
  anim_delay?: number;
  anim_duration?: number;
}

const slideIn = keyframes`
  to {
    transform: translateX(0);
  }
`;
const Wrapper = styled.li<Props>`
  animation: ${props => props.anim_duration}ms ${slideIn} forwards;
  transform: translateX(-100%);

  ${props =>
    props.anim_delay &&
    css`
      -webkit-animation-delay: ${props.anim_delay}ms;
      animation-delay: ${props.anim_delay}ms;
    `};
`;

export default Wrapper;
