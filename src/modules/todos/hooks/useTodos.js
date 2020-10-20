import { useSelector } from "react-redux"

const useTodos = () => {
	const todoList = useSelector((state) => state.todos.todoList)

	return { todoList }
}

export default useTodos
