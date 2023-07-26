
import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'cortar....', completed: true},
//   {text: 'curso React.js', completed: false},
//   {text: 'jack', completed: false},
//   {text: 'como sea', completed: false},
//   {text: 'JACK', completed: false},
//   {text: 'Coincidencias', completed: false},
//   {text: 'V rising', completed: false},
// ];

function App() {

  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan ' + searchValue)

  const completedTodos /*estados derivados */ = todos.filter(
    todo => 
    !!todo.completed).length; // es solo para saber que trabajamos con valores true or false
  const totalTodos=todos.length;

  
  const searchefTodos = todos.filter( // metoda para filtrar las concidencias del buscador (buscar todos)
    (todo) =>{// se pueden usar () en lugar de return
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText)
    }
  )
  

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return(
    <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    todos = {todos}
    saveTodos = {saveTodos}
    searchValue= {searchValue}
    setSearchValue = {setSearchValue}
    searchefTodos = {searchefTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  )

}





export default App;
