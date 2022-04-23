import { FunctionComponent } from 'react';

import styled, { css, keyframes } from '@styles/styled-components';

const pulse = keyframes`
  
  50% {
    color: gold;
  }
`;

const PulseSpan = styled.section<{ anim_delay?: number }>`
  padding-block: 20px;

  & > * {
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 1rem;
  }

  & span {
    animation: ${pulse} 4s ease-out infinite;

    ${props =>
      props.anim_delay &&
      css`
        -webkit-animation-delay: ${props.anim_delay}ms;
        animation-delay: ${props.anim_delay}ms;
      `};
  }
`;

interface Props {
  children: Array<JSX.Element> | JSX.Element;
  anim_delay?: number;
}

const AnimationContent: FunctionComponent<Props> = ({
  children,
  anim_delay,
}) => <PulseSpan anim_delay={anim_delay}>{children}</PulseSpan>;

export default AnimationContent;
