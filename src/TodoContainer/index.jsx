import React from 'react'
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoAddButton } from '../TodoAddButton';

import './TodoContainer.css';

/* const defaultTodos = [
    {text: 'Cortar cecbolla', completed: true}, 
    {text: 'Tomar curso de React.js', completed: false}, 
    {text: 'Llorar', completed: false}, 
    {text: 'Comer', completed: false}, 
  ];

  localStorage.setItem('TODOS_V1', defaultTodos);
  localStorage.removeItem('TODOS_V1'); */

function TodoContainer() {
  return (
    <div className='todoContainer' >
        <TodoList>
            {defaultTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text = {todo.text}
                completed = {todo.completed} />
            ))}
        </TodoList>
        <TodoAddButton/>
    </div>
  )
}

export {TodoContainer}