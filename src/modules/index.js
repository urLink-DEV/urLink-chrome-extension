import { combineReducers } from "redux"
import { fork, all } from "redux-saga/effects"
import { todosReducer, todosSaga } from "./todos"

// root reducer
export const rootReducer = combineReducers({
	todos: todosReducer,
})

// root saga
export function* rootSaga() {
	yield all([fork(todosSaga)])
}
