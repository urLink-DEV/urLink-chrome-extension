import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './store';
import createSagaMiddleware from 'redux-saga';
import Main from './pages/Main.jsx';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,  applyMiddleware(
  sagaMiddleware,
));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);