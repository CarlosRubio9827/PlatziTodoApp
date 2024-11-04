import React from "react";
import "./EmptyTodos.css";
import { LuListTodo } from "react-icons/lu";

const EmptyTodos = () => {
  return (
    <section className="emptyTodos">
      <p>Agrega un TODO.</p>
      <LuListTodo />
    </section>
  );
};

export default EmptyTodos;
