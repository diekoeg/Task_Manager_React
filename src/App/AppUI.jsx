import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoAddButton } from '../TodoAddButton';
import './App.css';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Navbar } from '../Navbar';

/* import { CompletedContainer } from './CompletedContainer'; */

import './main.css';
import React from 'react';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    showModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className='containerMain'>
        <div className='containerSec'>
         <TodoCounter />

         <TodoSearch />
         
         <div className='todoContainer'>
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) &&
               <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text = {todo.text}
                    completed = {todo.completed} 
                    onComplete = {() => completeTodo(todo.text)} 
                    onDelete = {() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {(!loading && searchedTodos.length !== 0) && 
              <TodoAddButton 
                showModal = {() => showModal()}
              />
            }
          </div>
          <div className='rightContainer'>
            <Navbar />
{/*             {navbarState === 1 && <Progress />}
            {navbarState === 2 && <CompletedList />}
            {navbarState === 3 && <Timer />} */}
          </div>

        </div>
      </div>


      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export {AppUI}