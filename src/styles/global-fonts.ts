import { createGlobalStyle } from './styled-components';

const GlobalFonts = createGlobalStyle`
  /* ############################################################################################### */
  /* ####################################### Averta-Sans ########################################### */
  /* ############################################################################################### */
  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 100;
    src: local("static"), url('./../assets/fonts/Averta/Averta Extrathin.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 100;
    src: local("static"), url('./../assets/fonts/Averta/Averta Extrathin Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 200;
    src: local("static"), url('./../assets/fonts/Averta/Averta Thin.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 200;
    src: local("static"), url('./../assets/fonts/Averta/Averta Thin Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 300;
    src: local("static"), url('./../assets/fonts/Averta/Averta Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 300;
    src: local("static"), url('./../assets/fonts/Averta/Averta Light Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 400;
    src: local("static"), url('./../assets/fonts/Averta/Averta.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 400;
    src: local("static"), url('./../assets/fonts/Averta/Averta Regular Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 600;
    src: local("static"), url('./../assets/fonts/Averta/Averta Semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 600;
    src: local("static"), url('./../assets/fonts/Averta/Averta Semibold Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 700;
    src: local("static"), url('./../assets/fonts/Averta/Averta Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 700;
    src: local("static"), url('./../assets/fonts/Averta/Averta Bold Italic.woff') format('woff');
  }


  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 800;
    src: local("static"), url('./../assets/fonts/Averta/Averta Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 800;
    src: local("static"), url('./../assets/fonts/Averta/Averta Black Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 900;
    src: local("static"), url('./../assets/fonts/Averta/Averta Extra Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    font-style: italic;
    font-weight: 900;
    src: local("static"), url('./../assets/fonts/Averta/Averta Extra Bold Italic.woff') format('woff');
  }

  /* ############################################################################################### */
  /* ######################################## SourceSerif ############################################ */
  /* ############################################################################################### */
  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 200;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 200;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-ExtraLightItalic.ttf') format('truetype');
  }


  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 300;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-Light.ttf') format('truetype');

  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 300;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-LightItalic.ttf') format('truetype');
  }


  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 400;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-Regular.ttf') format('truetype');

  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 400;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 600;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 600;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-SemiboldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 700;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 700;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-BoldItalic.ttf') format('truetype');
  }


  @font-face {
    font-family: 'SourceSerif';
    font-style: normal;
    font-weight: 800;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SourceSerif';
    font-style: italic;
    font-weight: 800;
    src: local("static"), url('./../assets/fonts/Source/Serif/SourceSerifPro-BlackItalic.ttf') format('truetype');
  }
  

 
`;

export default GlobalFonts;
