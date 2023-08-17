import React from 'react'
import './styles.css'

function DateTimeDisplay({ value, type, isDanger }) {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export {DateTimeDisplay}