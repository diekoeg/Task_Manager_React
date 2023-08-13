import React from 'react'
import './TodoList.css'

function TodoList({ 
  children, 
  type 
}) {
  return (
    <ul className={`todoList ${type === 1 ? 'leftPanel':'rightPanel'}`}>
      {children}
    </ul>
  )
}

export {TodoList};