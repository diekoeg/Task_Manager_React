import React from 'react'
import './styles.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
  const{
    showModal,
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) =>{
    //Para evitar que todos los botones sean submit
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  }


  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nueva Task</label>
      <textarea 
          placeholder='Hacer tarea'
          value={newTodoValue}
          onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type= "button"
          onClick={showModal}
          className='TodoForm-button 
          TodoForm-button--cancel'>
            Cancelar
        </button>
        <button
          type= "submit"
          className='TodoForm-button
          TodoForm-button--submit'>
            Agregar
        </button>
      </div>
      
  </form>
  )
}

export {TodoForm}