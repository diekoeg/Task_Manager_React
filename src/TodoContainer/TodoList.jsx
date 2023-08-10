import React from 'react'

function TodoList({ children }) {
  return (
    <ul style={{
      listStyle: 'none',
      padding: '0px 0px 0px 0px ',
      gridRow: '1'
    }}>
      {children}
    </ul>
  )
}

export {TodoList};