import styled from '@styles/styled-components';

const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export default RatingInfo;
