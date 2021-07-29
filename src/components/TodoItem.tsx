import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = props => <li className={classes.item} >{props.text} <span onClick={props.onRemoveTodo}>Remove</span></li>

export default TodoItem;