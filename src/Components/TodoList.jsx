// TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ tasks, onDeleteTask }) => {
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
