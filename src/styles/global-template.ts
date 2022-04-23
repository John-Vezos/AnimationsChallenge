import { IThemeInterface, createGlobalStyle } from './styled-components';

const GlobalTemplate = createGlobalStyle<IThemeInterface>`

  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    position: relative;
    overflow-x: hidden;
    margin: 0;
    min-height: 19000px;
  }


  /* Public scroll bar ** YouTube scroll bar ** */
    
  body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color:  ${props => props.theme.scrollBarBg};
  }

  body::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scrollBarBg};
    
  }

  body::-webkit-scrollbar-thumb {
    border: 4px solid  ${props => props.theme.scrollBarBg};
    border-radius: 10px;
    background-color: ${props => props.theme.scrollBar};
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.scrollBarHover};
  }


  html {
    /* scroll bar firefox */
    scrollbar-color: ${props => props.theme.scrollBar}  ${props =>
  props.theme.scrollBarBg};
    scrollbar-width: normal;
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${props =>
      props.theme.primaryBackground} inset !important;
    -webkit-text-fill-color:  ${props => props.theme.primary}  !important;

    }
 
  img {
    vertical-align: middle;
  }
`;

export default GlobalTemplate;
