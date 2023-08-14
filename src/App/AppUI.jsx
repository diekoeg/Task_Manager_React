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
import CircularWithValueLabel from '../CircularProgressWithLabel';
import { Timer } from '../Timer';
import { CompletedPanel } from '../CompletedPanel';


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
    showModal,
    navbarState
  } = React.useContext(TodoContext);



  return (
    <React.Fragment>
      <div className='containerMain'>
        <div className='containerSec'>
         <TodoCounter />

         <TodoSearch />
         
         <div className='todoContainer'>
            <TodoList type={1}>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) &&
               <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.title} 
                    item = {todo}
                    completed = {todo.completed} 
                    onComplete = {() => completeTodo(todo.title)} 
                    onDelete = {() => deleteTodo(todo.title)}
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
            {navbarState === 1 && <CircularWithValueLabel />}
            {navbarState === 2 && <CompletedPanel />}
            {navbarState === 3 && <Timer />}
          </div>

        </div>
      </div>


      {openModal && (
        <Modal>
          <TodoForm 
            items={searchedTodos}
          />
        </Modal>
      )}
      
    </React.Fragment>
  );
}

export {AppUI}