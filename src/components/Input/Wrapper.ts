import styled from '@styles/styled-components';
interface Props {
  maxWidth?: string;
}
const Wrapper = styled.div<Props>`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  margin-inline: auto;
  max-width: ${props => props.maxWidth};
`;

export default Wrapper;
