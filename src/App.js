import { TodoCounter } from './TodoCounter/TodoCouenter';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import React from 'react';
import { TodoSB } from './TodoSB/TodoSB';

// const defaultTodos = [
//   {text: 'cortar....', completed: true},
//   {text: 'curso React.js', completed: false},
//   {text: 'jack', completed: false},
//   {text: 'como sea', completed: false},
//   {text: 'JACK', completed: false},
//   {text: 'Coincidencias', completed: false},
//   {text: 'V rising', completed: false},
// ];

function useLocalStorage(itemName,initialValue){

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item,setItem] = React.useState(parsedItem);

  const saveItems = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  
  return [item,saveItems]

}

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


  return (
    </*react.fragment */>
    <TodoCounter 
    completed={completedTodos} 
    total={totalTodos}
    todos={todos}
    setTodos={saveTodos}
     />


    <TodoSB
    searchValue={searchValue}//el padre app le pasa el estado al componente hijo TodoSearch
    setSearchValue={setSearchValue}
    />
    <TodoList>
      {searchefTodos.map(todo=>(// ahorrarse el return
        <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
      ))}
    </TodoList>

    </>

  );
}





export default App;
