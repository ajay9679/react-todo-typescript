import React from 'react';
import Todos from './components/Todos';
import NewTodos from './components/NewTodos';
import TodosContextProvider from './store/todos-context';

const App = () => <TodosContextProvider>
	<NewTodos />
	<Todos />
</TodosContextProvider>

export default App;
