import React, { useState } from "react";
import TodoApplication from "./Components/TodoApplication";
import ApplicationHeader from "./Components/ApplicationHeader";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import BlankState from "./Components/BlankState";

function App() {
	const [tasks, setTasks] = useState([]);

	const handleAddTask = (task, dueDate) => {
		if (task !== "" && dueDate !== "") {
			const newTask = { task, dueDate };
			setTasks([...tasks, newTask]);
		}
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	};

	return (
		<>
			<ApplicationHeader />
			<TodoApplication onAddTask={handleAddTask} />
			{tasks.length === 0 && <BlankState />}
			<TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
		</>
	);
}

export default App;