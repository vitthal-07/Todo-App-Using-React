import React, { useRef } from "react";

function TodoApplication({ onAddTask }) {
	// const [task, setTask] = useState("");
	// const [dueDate, setDueDate] = useState("");
	const task = useRef("");
	const dueDate = useRef("");
	// const handleTaskChange = (evt) => {
	// 	setTask(evt.target.value);
	// };

	// const handleDueDateChange = (evt) => {
	// 	setDueDate(evt.target.value);
	// };

	const handleAddButtonClick = () => {
		const taskValue = task.current.value;
		const dueDatevalue = dueDate.current.value;
		task.current.value = "";
		dueDate.current.value = "";
		onAddTask(taskValue, dueDatevalue);
	};

	return (
		<div className='container'>
			<div className='row table-head'>
				<div className='col-3'>
					<input
						type='text'
						ref={task}
						// onChange={handleTaskChange}
						placeholder='Enter TODO here'
						// value={task}
					/>
				</div>
				<div className='col-2'>
					<input
						type='date'
						ref={dueDate}
						// onChange={handleDueDateChange}
						// value={dueDate}
					/>
				</div>
				<div className='col-1'>
					<button
						className='btn btn-success my-btns'
						onClick={handleAddButtonClick}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoApplication;
