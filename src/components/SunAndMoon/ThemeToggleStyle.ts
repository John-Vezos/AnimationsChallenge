import styled, { css } from '@styles/styled-components';
interface Props {
  isLightTheme: boolean;
}

export const ThemeToggleStyle = styled.button<Props>`
  --size: 2rem;
  --icon-fill: hsl(210 10% 30%);
  --icon-fill-hover: hsl(210 10% 15%);

  // easing
  --ease-3: cubic-bezier(0.25, 0, 0.3, 1);

  --ease-out-5: cubic-bezier(0, 0, 0, 1);

  --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
  --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  outline-offset: 5px;

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  ${props =>
    !props.isLightTheme &&
    css`
      --icon-fill: hsl(210 10% 70%);
      --icon-fill-hover: hsl(210 15% 90%);
    `};

  @media (hover: none) {
    --size: 48px;
  }

  &:is(:hover, :focus-visible) .sun-and-moon > :is(.moon, .sun) {
    fill: var(--icon-fill-hover);
  }

  &:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill-hover);
  }

  //  Sun-and-moon

  .sun-and-moon {
    & > :is(.moon, .sun, .sun-beams) {
      transform-origin: center center;
    }

    & > :is(.moon, .sun) {
      fill: var(--icon-fill);

      //@nest .theme-toggle:is(:hover, :focus-visible) > & {
      //  fill: var(--icon-fill-hover);
      //}
    }

    & > .sun-beams {
      stroke: var(--icon-fill);
      stroke-width: 2px;

      //@nest .theme-toggle:is(:hover, :focus-visible) & {
      //  stroke: var(--icon-fill-hover);
      //}
    }

    ${props =>
      !props.isLightTheme &&
      css`
        & > .sun {
          transform: scale(1.75);
        }

        & > .sun-beams {
          opacity: 0;
        }

        & > .moon > circle {
          transform: translateX(-7px);

          @supports (cx: 1) {
            transform: translateX(0);
            cx: 17;
          }
        }
      `};

    & > .sun {
      transition: transform 0.5s var(--ease-elastic-3);
    }

    & > .sun-beams {
      transition: transform 0.5s var(--ease-elastic-4),
        opacity 0.5s var(--ease-3);
    }

    & .moon > circle {
      transition: transform 0.25s var(--ease-out-5);

      @supports (cx: 1) {
        transition: cx 0.25s var(--ease-out-5);
      }
    }

    ${props =>
      !props.isLightTheme &&
      css`
        & > .sun {
          transform: scale(1.75);
          transition-timing-function: var(--ease-3);
          transition-duration: 0.25s;
        }

        & > .sun-beams {
          transform: rotateZ(-25deg);
          transition-duration: 0.15s;
        }

        & > .moon > circle {
          transition-delay: 0.25s;
          transition-duration: 0.5s;
        }
      `};
  }
`;
