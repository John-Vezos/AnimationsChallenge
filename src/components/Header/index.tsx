import ThemeToggle from '@src/containers/ThemeToggle';

import Wrapper from './Wrapper';

const LOGO = 'HEADER';

function Header() {
  return (
    <Wrapper>
      <h1>{LOGO}</h1>
      <ThemeToggle />
    </Wrapper>
  );
}

export default Header;
