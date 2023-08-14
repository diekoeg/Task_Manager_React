import React from 'react'
import './styles.css'
import { TodoContext } from '../TodoContext';

function TodoForm({
  items
}) {
  const{
    showModal,
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);


  const [newTitle, setNewTitle] = React.useState('');
  const [newPrio,setNewPrio] = React.useState(false);
  const [createCat, setCreateCat] = React.useState(false);
  const [newCat, setNewCat] = React.useState('');
  const [newComents, setNewComents] = React.useState('');

  const onSubmit = (event) =>{
    //Para evitar que todos los botones sean submit
    event.preventDefault();
    const item = {
      title: newTitle,
      completed: false,
      cat: newCat, 
      coments: newComents, 
      prio: newPrio
    }

/*     console.log(newCat); */

    addTodo(item);
    setOpenModal(false);
  }

  const cats = items.map(item => item.cat);
  let newCats = [...new Set(cats)];

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nueva Task</label>
      <div className={`${newPrio && 'title-prio-container'}`} style={{
        display: 'inline-flex'
      }}>
        <input required={true}
          value={newTitle} 
          type="text" 
          placeholder='Title'
          onChange={((event) =>{
            setNewTitle(event.target.value)
          })}
        />
        <span 
          className='material-symbols-outlined'
          onClick={() => {
            setNewPrio(state => !state)
          }}
        >
          flag
          </span> 
      </div>
      <div className='contentSelect'>
        {!createCat ? 
         <select id='categories' 
         onChange={(event)=>{
          /* console.log(event.target.options[event.target.selectedIndex].value); */
          setNewCat(
            event.target.options[event.target.selectedIndex].value
          ) 
         }}>
          <option value="">Select category</option>
            {newCats.map(cat =>(
              cat && 
              <option key={cat} value={cat}>
                {cat}
              </option>
              
            ))}
          </select>
        : 
          <input 
            value={newCat} 
            type="text"
            placeholder='New Category'
            onChange={((event) =>{
              setNewCat(event.target.value)
            })}
          />
        }
        <span 
          onClick={() => { 
            setCreateCat(state => !state)
          }}
          className="material-symbols-outlined">
          {createCat ? 'cancel': 'add_circle'}
        </span>
      </div>
      
      
      <textarea 
          placeholder='Coments'
          value={newComents}
          onChange={((event) =>{
            setNewComents(event.target.value)
          })}
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