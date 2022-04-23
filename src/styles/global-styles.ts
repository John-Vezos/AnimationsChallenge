import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  
  #root {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primaryBackground};
    min-height: 100%;
    min-width: 100%;
  }
  
  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  

  body {
    font-family: SourceSerif, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Averta, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    font-family: SourceSerif, SourceSerif, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  button {
    font-family: Averta, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Averta, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
   code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

export default GlobalStyle;
