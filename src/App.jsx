import React from "react";
import TodoApplication from "./Components/TodoApplication";
import ApplicationHeader from "./Components/ApplicationHeader";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import BlankState from "./Components/BlankState";
import TodoItemContextProvider from "./store/todo-items";

function App() {
	return (
		<>
			<TodoItemContextProvider>
				<ApplicationHeader />
				<TodoApplication />
				<BlankState />
				<TodoList />
			</TodoItemContextProvider>
		</>
	);
}

export default App;
