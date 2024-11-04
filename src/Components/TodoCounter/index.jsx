import React from "react";
import "./style.css";
import { TodoContext } from "../../TodoContext";

function TodoCounter() {
  // console.log("Props: ",props)

  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1 className="todo-counter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  );
}

export { TodoCounter };
