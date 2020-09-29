import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './pages/Main.jsx';
import store from './modules'

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);