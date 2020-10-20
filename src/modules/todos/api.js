import axios from "axios"

const BASEURL = "https://jsonplaceholder.typicode.com"

const todosClient = axios.create({
	baseURL: `${BASEURL}`,
	responseType: "json",
})

export const getTodos = () => todosClient.get("/todos")
