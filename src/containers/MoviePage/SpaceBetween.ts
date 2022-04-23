import styled from '@styles/styled-components';

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 20px;
  & > * {
    margin-block: 5px;
  }
`;

export default SpaceBetween;
