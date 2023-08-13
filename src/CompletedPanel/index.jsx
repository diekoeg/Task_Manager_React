import React from 'react'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';

function CompletedPanel() {
  const {
    searchedCompletedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return (
    <div style={{
      gridRow: 2,
      height: '100%'
    }}>
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