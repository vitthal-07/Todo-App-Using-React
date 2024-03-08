import React, { useContext } from "react";
import { TodoItems } from "../store/todo-items";

export default function TodoItem({ taskName, dueDate, index }) {
	const { deleteItem } = useContext(TodoItems);
	return (
		<div className='row table-head'>
			<div className='col-3'>{taskName}</div>
			<div className='col-2'>{dueDate}</div>
			<div className='col-1'>
				<button
					type='button'
					onClick={() => deleteItem(index)}
					className='btn btn-danger my-btns'
				>
					Delete
				</button>
			</div>
		</div>
	);
}
