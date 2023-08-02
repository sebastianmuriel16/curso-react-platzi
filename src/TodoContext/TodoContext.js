import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){


    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1',[])
        const [searchValue, setSearchValue] = React.useState('');
        console.log('los usuarios buscan ' + searchValue)
      
        const completedTodos /*estados derivados */ = todos.filter(
          todo => 
          !!todo.completed).length; // es solo para saber que trabajamos con valores true or false
        const totalTodos=todos.length;
      
        
        const searchedTodos = todos.filter( // metoda para filtrar las concidencias del buscador (buscar todos)
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
          }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}