import React from "react"
import { useDispatch } from "react-redux"
import useTodos from "@modules/todos/hooks/useTodos"
import { getTodos } from "@modules/todos/"

export default function Test() {
	const dispatch = useDispatch()
	const { todoList } = useTodos()

	const getToDoList = () => {
		dispatch(getTodos.request())
	}

	return (
		<>
			<h3>Test</h3>
			<button onClick={getToDoList}>Get Todos</button>
			<ul>
				{todoList?.map((el, index) => {
					return (
						<li key={index}>
							<div>{el.title}</div>
							<div style={{ color: "red" }}>
								{el.completed ? "Done" : "To Do"}
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
