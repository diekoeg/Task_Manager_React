import React from 'react'
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'

function TodoSearch() {
  const {
    setSearchValue, 
    searchValue
  } = React.useContext(TodoContext);

  return (
    
    <input 
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }}
      className='search'
      value={searchValue} 
      placeholder='Cortar cebolla' 
      style={{
        gridColumn: '2/4',
        gridRow: '2'
      }}
    />
  )
}

export {TodoSearch};