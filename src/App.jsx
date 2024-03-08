import React, { useState } from "react";
import TodoApplication from "./Components/TodoApplication";
import ApplicationHeader from "./Components/ApplicationHeader";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import BlankState from "./Components/BlankState";
import { TodoItems } from "./store/todo-items";

function App() {
	const [tasks, setTasks] = useState([]);

	// const handleAddTask = (task, dueDate) => {
	// 	if (task !== "" && dueDate !== "") {
	// 		const newTask = { task, dueDate };
	// 		setTasks([...tasks, newTask]);
	// 	}`
	// };

	const addNewItem = (task, dueDate) => {
		if (task !== "" && dueDate !== "") {
			const newTask = { task, dueDate };
			setTasks([...tasks, newTask]);
		}
	};

	const deleteItem = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	};

	return (
		<>
			<TodoItems.Provider value={{ tasks, addNewItem, deleteItem }}>
				<ApplicationHeader />
				<TodoApplication />
				<BlankState />
				<TodoList />
			</TodoItems.Provider>
		</>
	);
}

export default App;
