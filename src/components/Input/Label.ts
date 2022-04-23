import styled from '@styles/styled-components';

const Label = styled.label`
  position: absolute;
  top: 0;
  padding-inline: 2px;
  left: 5px;
  display: block;
  transition: all 0.2s, background-color 0s;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.primaryBackground};
`;

export default Label;
