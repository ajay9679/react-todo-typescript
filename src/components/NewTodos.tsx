import React from 'react';
import {TodosContext} from '../store/todos-context';
import classes from './NewTodos.module.css';

const NewTodos: React.FC = () => {
	const todosCtx = React.useContext(TodosContext);
	const todoTextInputRef = React.useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = todoTextInputRef.current!.value;
		if(enteredText.trim().length === 0) return;
		todosCtx.addTodo(enteredText);
		todoTextInputRef.current!.value = '';
	};

	return <form onSubmit={submitHandler} className={classes.form}>
		<label htmlFor="text">Todo Text</label>
		<input type="text" id="text" ref={todoTextInputRef} />
		<button>Add Todo</button>
	</form>
};

export default NewTodos;