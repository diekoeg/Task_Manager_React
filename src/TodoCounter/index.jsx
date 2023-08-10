import React from 'react'
import { TodoContext } from '../TodoContext';


function TodoCounter() {
  const {
    completedTodos: completed, 
    totalTodos: total
  } = React.useContext(TodoContext);

  return (
    <h1 style={{ 
      textAlign: 'center',
      margin: 0,
      padding: '48px',
      gridColumn: '2/4',
      gridRow: '1'
    }}>
      You have completed {completed} of {total} tasks!
    </h1> 
  )
}

export {TodoCounter};