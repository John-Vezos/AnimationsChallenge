import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import uiReducer from './UI/uiReducer';

const reducers = combineReducers({
  ui: uiReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
type rootState = ReturnType<typeof store.getState>;
declare module 'react-redux' {
  interface DefaultRootState extends rootState {}
}
