import { useSelector } from "react-redux"
import { getTodos } from "../index"

const useTodos = () => {
	const todoList = useSelector((state) => state.todos.todoList)

	return { todoList }
}

export default useTodos
