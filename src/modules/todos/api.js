import axios from "axios"

const BASEURL = "https://jsonplaceholder.typicode.com"

const todosClient = axios.create({
	baseURL: `${BASEURL}`,
	responseType: "json",
})

//jsonplaceholder 임시용
const headers = { "Content-type": "application/json; charset=UTF-8" }

export const getTodos = () => todosClient.get("/todos")

export const createTodos = (params, headers) =>
	todosClient.post("/todos", params, {
		headers,
	})

export const deleteTodos = (params, headers) =>
	todosClient.delete(`/todos/${params}`, {
		headers,
	})
