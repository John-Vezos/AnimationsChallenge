export type UIState = {
  notification: {
    status: string;
    title: string;
    message: string;
  } | null;
  isLightTheme: boolean;
};
const initialUIState: UIState = {
  notification: { status: ``, title: ``, message: `` },
  isLightTheme: localStorage.getItem('theme-preference') !== 'dark',
};

const setNotification = (payload: {
  status: string;
  title: string;
  message: string;
}) =>
  ({
    type: 'setNotification',
    payload,
  } as const);

const resetNotification = () =>
  ({
    type: 'resetNotification',
  } as const);

const themeDarkLightToggle = () =>
  ({
    type: 'themeDarkLightToggle',
  } as const);

type Actions = ReturnType<
  | typeof setNotification
  | typeof resetNotification
  | typeof themeDarkLightToggle
>;

const uiReducer = (state = initialUIState, action: Actions) => {
  switch (action.type) {
    case 'setNotification': {
      // const newState = Object.assign({}, state);
      const newState = { ...state };
      newState.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
      return newState;
    }
    case 'resetNotification': {
      const newState = { ...state };
      newState.notification = null;
      return newState;
    }
    case 'themeDarkLightToggle': {
      const newState = { ...state };
      newState.isLightTheme = !newState.isLightTheme;
      return newState;
    }
    default:
      return state;
  }
};

export default uiReducer;
