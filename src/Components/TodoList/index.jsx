import React from "react";
import "./index.css"

function TodoList({ children }) {
  return <ul className="todoList">{children}</ul>;
}

export { TodoList };
