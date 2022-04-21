import { DefaultRootState } from 'react-redux';
import { Dispatch } from 'redux';

export const themeHandler = () => {
  return (dispatch: Dispatch, getState: () => DefaultRootState) => {
    const newTheme = !getState().ui.isLightTheme;

    localStorage.setItem('theme-preference', newTheme ? 'light' : 'dark');
    dispatch({ type: 'themeDarkLightToggle' });
  };
};
