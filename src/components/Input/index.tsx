import { FunctionComponent } from 'react';

import Label from '@components/Input/Label';
import Wrapper from '@components/Input/Wrapper';

import styled from '@styles/styled-components';

export const InputStyle = styled.input`
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};

  border-radius: 4px;
  width: 100%;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 5px;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #3f51b5;
      font-weight: 600;
    }
    padding-bottom: 6px;
    border-width: 3px;
    border-color: #3f51b5;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
interface Props {
  id?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  required?: boolean;
  placeholder?: string;
  maxWidth?: string;
}
const Input: FunctionComponent<Props> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  maxWidth,
}) => (
  <Wrapper maxWidth={maxWidth}>
    <InputStyle
      id={id}
      type={type}
      value={value}
      onChange={event => onChange && onChange(event.target.value)}
      placeholder={placeholder}
      required={required}
    />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
);

export default Input;
