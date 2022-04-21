import * as styledComponents from 'styled-components';

// theme.ts
// your theme variables
export interface IThemeInterface {
  primary?: string;
  primaryBackground?: string;
  componentBackground?: string;
  componentBackgroundSecondary?: string;
  scrollBar?: string;
  scrollBarHover?: string;
  scrollBarBg?: string;
}

export const theme = {
  lightTheme: {
    primary: '#000',
    primaryBackground: '#F9F9F9',
    componentBackground: '#FFF',
    componentBackgroundSecondary: '#FFF',

    scrollBar: 'rgba(96, 96, 96, 1)',
    scrollBarHover: 'rgba(96, 96, 96, 0.7)',
    scrollBarBg: '#F9F9F9' || '#FFF',
  },
  darkTheme: {
    primary: '#FFF',
    primaryBackground: '#2F3337',
    componentBackground: '#2F3337',
    componentBackgroundSecondary: '#2F3337',

    scrollBar: 'rgba(207, 207, 207, 0.8)',
    scrollBarHover: 'rgba(207, 207, 207, 0.5)',
    scrollBarBg: '#2F3337' || '#000',
  },
};
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
