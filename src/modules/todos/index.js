import * as api from "./api"
import { produce } from "immer"
import { createAction } from "@reduxjs/toolkit"
import { createRequestAction, createRequestSaga } from "../helpers"
import { call, all, put, takeEvery } from "redux-saga/effects"

export const getTodos = createRequestAction("todos/GET_TODOS")

const initialState = {
	todoList: null,
}

// Reducer
export const todosReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case getTodos.SUCCESS:
				draft.todoList = action.payload
				break

			default:
				return state
		}
	})

// Saga
const watchGetTodosSaga = createRequestSaga(getTodos, function* (action) {
	// const headers = yield getHeaders();
	const response = yield call(api.getTodos, action.payload, null)
	return response.data
})

export function* todosSaga() {
	yield all([takeEvery(getTodos.REQUEST, watchGetTodosSaga)])
}
