// TodoList.jsx
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItems } from "../store/todo-items";

export const TodoList = ({ onDeleteTask }) => {
	const { tasks } = useContext(TodoItems);
	return (
		<div className='container'>
			{tasks.map((task, index) => (
				<TodoItem
					taskName={task.task}
					key={task.task + index}
					dueDate={task.dueDate}
					onDeleteTask={onDeleteTask}
					index={index}
				/>
			))}
		</div>
	);
};
