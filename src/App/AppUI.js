import { TodoCounter } from '../TodoCounter/TodoCouenter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSB } from '../TodoSB/TodoSB';
import React from 'react';
import { TodosLoading } from '../TodosLoading/TodoLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI(){
    return (
        </*react.fragment */>
        <TodoCounter/>
        <TodoSB/>

          <TodoContext.Consumer>
              {({
                loading,
                error,
                searchedTodos,
                completeTodo,
                deleteTodo
              })=>(
            <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
           </TodoList>
            )}
          </TodoContext.Consumer>
        </>
    
      );
}

export { AppUI };