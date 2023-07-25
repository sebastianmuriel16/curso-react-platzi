import { TodoCounter } from './TodoCouenter';
import { TodoSearch } from './TodoSearch';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';
import { TodoSB } from './TodoSB';

const defaultTodos = [
  {text: 'cortar....', completed: true},
  {text: 'curso React.js', completed: false},
  {text: 'jack', completed: false},
  {text: 'como sea', completed: false},
  {text: 'JACK', completed: false},
  {text: 'Coincidencias', completed: false},
];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if(!localStorageTodos){
    localStorage.getItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }
  

  const [todos,setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan ' + searchValue)

  const completedTodos /*estados derivados */ = todos.filter(
    todo => 
    !!todo.completed).length; // es solo para saber que trabajamos con valores true or false
  const totalTodos=todos.length;

  console.log(completedTodos)
  
  const searchefTodos = todos.filter( // metoda para filtrar las concidencias del buscador (buscar todos)
    (todo) =>{// se pueden usar () en lugar de return
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText)
    }
  )
  
  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }


  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
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
    setTodos={setTodos}
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
