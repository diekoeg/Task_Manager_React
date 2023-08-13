import React from 'react';

function useLocalStorage(itemName, initialValue){
  const [item,setItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);

    //Para guardar el estado de la aplicacion
  const localStorageItem = localStorage.getItem(itemName);
  
  React.useEffect(() => {
    setTimeout(() => {
      let parsedItem;
      try {
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(itemName));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  //Regresa el valor del actualizador de React y del localstorage
  return {
    item, 
    saveItem,
    loading,
    error
  };
}
export {useLocalStorage};

  /* 
  const defaultTodos = [
  {text: 'Cortar cecbolla', completed: true}, 
  {text: 'Tomar curso de React.js', completed: false}, 
  {text: 'Llorar', completed: false}, 
  {text: 'Comer', completed: false}, 
  {text: 'LALA', completed: true}]

  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  localStorage.removeItem('TODOS_V1') 


  const defaultTodos = [
    {title: 'Cortar cecbolla', completed: true, cat: 'home', coments: 'hola', prio: false}, 
    {title: 'Tomar curso de React.js', completed: false, cat: 'personal', coments: 'jeje', prio:true}, 
    {title: 'Llorar', completed: false, cat: 'personal', coments: '', prio:true}, 
    {title: 'Comer', completed: false, cat: 'home', coments: 'bb', prio: true}, 
    {title: 'LALA', completed: true, cat: 'school', coments: 'a', prio: false}
  ]

  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  localStorage.removeItem('TODOS_V1') 
]; 
*/