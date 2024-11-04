import React from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import TodosError from "../TodosError";
import TodosLoading from "../TodosLoading";
import EmptyTodos from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import ModalContainer from "../Components/ModalContainer";
import Modal from "../Components/Modal";

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    openModal,
  } = React.useContext(TodoContext);

  console.log("Open modal: ", openModal);
  return (
    <>
      <div className="container">
        <TodoCounter />
        <TodoSearch />
        <TodoList searchValue={searchValue}>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && !searchedTodos.length && <EmptyTodos />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              item={todo}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
        {openModal && (
          <ModalContainer>
            <Modal />
          </ModalContainer>
        )}
    </>
  );
};

export { AppUI };
