import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'


function TodoCounter() {
  const {
    completedTodosLength: completed, 
    totalTodos: total
  } = React.useContext(TodoContext);

  return (
    <h1 className='counter'>
      You have completed {completed} of {total} tasks!
    </h1> 
  )
}

export {TodoCounter};