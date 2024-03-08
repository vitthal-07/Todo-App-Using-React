import { createContext, useReducer } from "react";

export const TodoItems = createContext({
	tasks: [],
	addNewItem: () => {},
	deleteItem: () => {},
});

const todoItemReducer = (currState, action) => {
	let newState = currState;
	if (action.type === "ADD_ITEM") {
		if (action.payload.task !== "" && action.payload.dueDate !== "") {
			newState = [
				...newState,
				{ task: action.payload.task, dueDate: action.payload.dueDate },
			];
		}
	} else if (action.type === "DELETE_ITEM") {
		newState = currState.filter((_, i) => i !== action.payload.index);
	}
	return newState;
};

function TodoItemContextProvider({ children }) {
	const [tasks, dispatchTasks] = useReducer(todoItemReducer, []);
	const addNewItem = (task, dueDate) => {
		const addItem = {
			type: "ADD_ITEM",
			payload: {
				task,
				dueDate,
			},
		};
		dispatchTasks(addItem);
	};

	const deleteItem = (index) => {
		const addItem = {
			type: "DELETE_ITEM",
			payload: { index },
		};
		dispatchTasks(addItem);
	};

	return (
		<TodoItems.Provider value={{ tasks, addNewItem, deleteItem }}>
			{children}
		</TodoItems.Provider>
	);
}

export default TodoItemContextProvider;
