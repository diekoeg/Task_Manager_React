import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext =  React.createContext();

function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      //Para los cambios de estado de la busqueda
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
          }
      );
    
      //Para los cambios de estado del contador de tareas
      const completedTodos = todos.filter(
        todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      //Para los cambios de estado de las tareas completadas (tachar las tareas)
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completed =  !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      //Para los cambios de estado para borrar las tareas
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }

      const showModal = () => {
        setOpenModal(state => !state)
      }

      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos);
      }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo, 
            openModal,
            setOpenModal,
            showModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoContext,TodoProvider};