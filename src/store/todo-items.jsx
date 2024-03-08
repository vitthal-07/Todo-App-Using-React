import { createContext } from "react";

export const TodoItems = createContext({
	tasks: [],
	addNewItem: () => {},
	deleteItem: () => {},
});
