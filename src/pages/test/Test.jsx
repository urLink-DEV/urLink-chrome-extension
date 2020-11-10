import React from "react"
import { useDispatch, useSelector } from "react-redux"
import useTodos from "@modules/todos/hooks/useTodos"
import {
	getTodos,
	createTodos,
	deleteTodosThunk,
	increase,
	decrease,
} from "@modules/todos"

export default function Test() {
	const dispatch = useDispatch()
	const { todoList } = useTodos()
	const { count } = useSelector((state) => state.todos)
	const [todo, setTodo] = React.useState({})

	const handleGetToDoList = () => {
		dispatch(getTodos.request())
	}

	const handleDeleteTodo = (id) => async () => {
		try {
			await dispatch(deleteTodosThunk({ id }))
			alert("Deleted")
		} catch (e) {
			console.log(e)
		}
	}

	const handleCreateTodo = () => {
		dispatch(createTodos.request({ ...todo }))
	}

	const handleIncrease = () => {
		dispatch(increase())
	}

	const handleDecrease = () => {
		dispatch(decrease())
	}

	const onChange = (e) => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<h3>Test</h3>
			<h4>{count}</h4>
			<div>
				<button onClick={handleDecrease}>-</button>
				<button onClick={handleIncrease}>+</button>
			</div>
			<br></br>
			<button onClick={handleGetToDoList}>Get Todos</button>
			<br></br>
			<br></br>
			<form>
				<input type="text" name="title" onChange={onChange} />
				<input type="text" name="body" onChange={onChange} />
				<input type="text" name="userId" onChange={onChange} />
				<button type="button" onClick={handleCreateTodo}>
					CREATE
				</button>
			</form>
			<ul>
				{todoList?.map((el, index) => {
					return (
						<li key={index}>
							<div>{el.title}</div>
							<div style={{ color: "red" }}>
								{el.completed ? "Done" : "To Do"}
							</div>
							<button onClick={handleDeleteTodo(el.id)}>DELETE</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}
