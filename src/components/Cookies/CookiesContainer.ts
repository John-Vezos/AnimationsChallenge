import styled, {css, keyframes} from '@styles/styled-components';

const CookiePopupAnim = keyframes`
  0% {
    transform: translateY(calc(100% + 20px));
  }
  100% {
    transform: translateY(0);
  }
`;

const CookiePopupAnimHide = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(100% + 20px));
  }
`;

interface Props {
  expand?: boolean;
}

const CookiesContainer = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: 20px;
  left: 20px;
  width: 360px;
  height: 240px;
  padding: 25px;
  font-size: 16px;
  overflow: hidden;
  color: #d6d6d6;
  border-radius: 12px;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;
  z-index: 5;

  ${(props) =>
    props.expand
      ? css`
          animation: ${CookiePopupAnim} 2s forwards;
        `
      : css`
          animation: ${CookiePopupAnimHide} 1s forwards;
        `};

  @media (max-width: 416px) {
    width: calc(100% - 40px);
  }
`;

export default CookiesContainer;
