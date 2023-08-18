import React from 'react'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext'
import './CompletedPanel.css'

function CompletedPanel() {
  const {
    searchedCompletedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return (
    <div className='containerCompleted'>
      <TodoList type={2}>
        {searchedCompletedTodos.map((todo) => (
          <TodoItem 
              key={todo.title} 
              item = {todo}
              completed = {todo.completed} 
              onComplete = {() => completeTodo(todo.title)} 
              onDelete = {() => deleteTodo(todo.title)}
            />
        ))}
      </TodoList>
    </div>
  )
}

export  {CompletedPanel}