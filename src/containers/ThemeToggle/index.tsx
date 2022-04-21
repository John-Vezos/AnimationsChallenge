import { FunctionComponent } from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { themeHandler } from '@src/Redux/UI/uiActions';

import SunAndMoon from './../../components/SunAndMoon';

const ThemeToggle: FunctionComponent = () => {
  const isLightTheme: boolean = useSelector(
    (state: DefaultRootState) => state.ui.isLightTheme,
  );
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <SunAndMoon
      isLightTheme={isLightTheme}
      onClick={() => dispatch(themeHandler())}
    />
  );
};

export default ThemeToggle;
