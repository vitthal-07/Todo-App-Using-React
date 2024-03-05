import React, {  useContext } from "react";
import { TodoItems } from "../store/todo-items";

export default function BlankState() {
	const todoItems = useContext(TodoItems);
	return (todoItems.length === 0 && <div className='blanklist'>No Todo's to display</div>);
}
