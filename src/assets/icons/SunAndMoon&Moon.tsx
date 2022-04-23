import * as React from 'react';

const SvgSunAndMoon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> = props => (
  <svg
    width="24"
    height="24"
    aria-hidden="true"
    className="sun-and-moon"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask id="moon-mask" className="moon">
      <rect width="100%" height="100%" fill="#fff" />
      <circle cx="24" cy="10" r="6" fill="#000" />
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      className="sun"
      mask="url(#moon-mask)"
    />
    <g stroke="currentColor" className="sun-beams">
      <path d="M12 1L12 3" />
      <path d="M12 21L12 23" />
      <path d="M4.22 4.22L5.64 5.64" />
      <path d="M18.36 18.36L19.78 19.78" />
      <path d="M1 12L3 12" />
      <path d="M21 12L23 12" />
      <path d="M4.22 19.78L5.64 18.36" />
      <path d="M18.36 5.64L19.78 4.22" />
    </g>
  </svg>
);

export default SvgSunAndMoon;
