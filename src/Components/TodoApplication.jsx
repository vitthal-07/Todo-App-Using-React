import React, { useState } from "react";

function TodoApplication({ onAddTask }) {
	const [task, setTask] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleTaskChange = (evt) => {
		setTask(evt.target.value);
	};

	const handleDueDateChange = (evt) => {
		setDueDate(evt.target.value);
	};

	const handleAddButtonClick = () => {
		onAddTask(task, dueDate);
		setTask("");
		setDueDate("");
	};

	return (
		<div className='container'>
			<div className='row table-head'>
				<div className='col-3'>
					<input
						type='text'
						onChange={handleTaskChange}
						placeholder='Enter TODO here'
						value={task}
					/>
				</div>
				<div className='col-2'>
					<input
						type='date'
						onChange={handleDueDateChange}
						value={dueDate}
					/>
				</div>
				<div className='col-1'>
					<button
						className='btn btn-success my-btns'
						onClick={handleAddButtonClick}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoApplication;
