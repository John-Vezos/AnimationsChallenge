import styled from '@styles/styled-components';

const Categories = styled.div`
  margin-block: 20px;
  & > span {
    padding: 5px 10px;
    border-radius: 18px;
    border: 1px solid ${props => props.theme.primary};
  }
  & > span:not(:last-child) {
    margin-right: 5px;
  }
`;

export default Categories;
