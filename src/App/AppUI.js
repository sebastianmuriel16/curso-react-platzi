import { TodoCounter } from '../TodoCounter/TodoCouenter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSB } from '../TodoSB/TodoSB';
import React from 'react';

function AppUI({
   loading,
   error, 
   completedTodos,
   totalTodos,
   todos,
   saveTodos,
   searchValue,
   setSearchValue,
   searchefTodos,
   completeTodo,
   deleteTodo, 
}){
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
          {loading && <p>Estamos cargando...</p>}
          {error && <p>En mi opinión profesiónal es tiempo para PÁNICO</p>}

          {(!loading && searchefTodos.length === 0) 
          && <p>Crea tu primer TODO</p>}

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

export { AppUI };