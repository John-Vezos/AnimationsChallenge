/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@src/containers/App';
import RestoreScrollPosition from '@src/hooks/RestoreScrollPosition';

import Cookies from '@components/Cookies';

import store from './Redux/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div'),
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RestoreScrollPosition />
      <Cookies />
      <App />
    </BrowserRouter>
  </Provider>,
);
