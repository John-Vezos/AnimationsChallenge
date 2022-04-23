import Backdrop from '@components/Backdrop/Backdrop';

import styled from '@styles/styled-components';

interface Props {
  display: string;
}

const CookiesBackdrop = styled(Backdrop)<Props>`
  background-color: rgba(32, 33, 36, 0.75);
  z-index: 4;
  ${props => props.display && `display: ${props.display};`};
`;

export default CookiesBackdrop;
