import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';

const rootReducer = combineReducers({ counter });
export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,  applyMiddleware(
  sagaMiddleware,
));

sagaMiddleware.run(rootSaga);

export default store;