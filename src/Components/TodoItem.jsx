import React from "react";

export default function TodoItem({ taskName, dueDate, onDeleteTask, index }) {
	return (
		<div className='row table-head'>
			<div className='col-3'>{taskName}</div>
			<div className='col-2'>{dueDate}</div>
			<div className='col-1'>
				<button
					type='button'
					onClick={() => onDeleteTask(index)}
					className='btn btn-danger my-btns'>
					Delete
				</button>
			</div>
		</div>
	);
}
