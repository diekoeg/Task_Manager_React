import React from 'react'
import { TodoContext } from '../TodoContext';
import './EmptyTodos.css'

function EmptyTodos() {
  const{
    showModal,
  } = React.useContext(TodoContext);

  return (
    <div className='buttonContainer'>
      <button className='EmptyTodosButton'
        onClick={showModal}>
        Create your first task!
      </button>
    </div>

  )
}

export {EmptyTodos}