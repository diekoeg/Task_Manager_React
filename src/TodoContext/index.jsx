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
    
      //Para los cambios de estado del contador de tareas
      const completedTodos = todos.filter(
        todo => !!todo.completed);

      const completedTodosLength = completedTodos.length;

      //Para los cambios de estado de la busqueda
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.title.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
          }
      );

      const searchedCompletedTodos = completedTodos.filter(
        (todo) => {
          const todoText = todo.title.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
          }
      ); 

      const totalTodos = todos.length;
    
      //Para los cambios de estado de las tareas completadas (tachar las tareas)
      const completeTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.title === title
        )
        newTodos[todoIndex].completed =  !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      //Para los cambios de estado para borrar las tareas
      const deleteTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.title === title
        )
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }

      const showModal = () => {
        setOpenModal(state => !state)
      }

      const addTodo = (title) =>{
        const newTodos = [...todos];
        newTodos.push({
          title,
          completed: false
        })
        saveTodos(newTodos);
      }
    const percentage = completedTodosLength*100/totalTodos;
    
    // Para el manejo de la navbar del panel derecho
    const [navbarState, setNavbarState] = React.useState(1);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            completedTodosLength,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            searchedCompletedTodos,
            completeTodo,
            deleteTodo, 
            openModal,
            setOpenModal,
            showModal,
            addTodo,
            navbarState,
            percentage,
            setNavbarState
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoContext,TodoProvider};