import * as api from "./api"
import { produce } from "immer"
import { createAction } from "@reduxjs/toolkit"
import {
	createRequestAction,
	createRequestSaga,
	createRequestThunk,
} from "../helpers"
import { call, all, put, takeEvery } from "redux-saga/effects"

export const getTodos = createRequestAction("todos/GET_TODOS")
export const createTodos = createRequestAction("todos/CREATE_TODOS")
export const deleteTodos = createRequestAction("todos/DELETE_TODOS")
export const deleteTodosThunk = createRequestThunk(deleteTodos)

export const increase = createAction("counter/INCREASE")
export const decrease = createAction("counter/DECREASE")

const initialState = {
	todoList: null,
	count: 0,
}

// Reducer
export const todosReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case getTodos.SUCCESS:
				draft.todoList = action.payload
				break

			case createTodos.SUCCESS:
				draft.todoList.unshift(action.payload)
				break

			case deleteTodos.SUCCESS:
				draft.todoList = draft.todoList.filter(
					(item) => item.id !== action.payload
				)
				break

			case increase.type:
				draft.count = draft.count + 1
				break
			case decrease.type:
				draft.count = draft.count - 1
				break

			default:
				break
		}
	})

// Saga
const watchGetTodosSaga = createRequestSaga(getTodos, function* (action) {
	// const headers = yield getHeaders();
	const response = yield call(api.getTodos, action.payload, null)
	return response.data
})

const watchCreateTodosSaga = createRequestSaga(createTodos, function* (action) {
	// const headers = yield getHeaders();
	const response = yield call(api.createTodos, action.payload, null)
	return response.data
})

const watchDeleteTodosSaga = createRequestSaga(deleteTodos, function* (action) {
	// const headers = yield getHeaders();
	const { id } = action.payload
	yield call(api.deleteTodos, id, null)
	return id
})

export function* todosSaga() {
	yield all([
		takeEvery(getTodos.REQUEST, watchGetTodosSaga),
		takeEvery(createTodos.REQUEST, watchCreateTodosSaga),
		takeEvery(deleteTodos.REQUEST, watchDeleteTodosSaga),
	])
}
