import { TodoCounter } from '../TodoCounter/TodoCouenter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSB } from '../TodoSB/TodoSB';
import React from 'react';
import { TodosLoading } from '../TodosLoading/TodoLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI(){

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  }= React.useContext(TodoContext)


    return (
        </*react.fragment */>
        <TodoCounter/>
        <TodoSB
        setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
        funciono
        </Modal>
      )}

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
        </>
    
      );
}

export { AppUI };