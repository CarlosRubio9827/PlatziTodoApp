import React from "react";
import "./index.css";
import { MdDeleteForever } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

function TodoItem({ item, onComplete, onDelete }) {
  return (
    <li className="todoItem">
      <span onClick={onComplete}>
        <FaCircleCheck
          className={`todoItem-done ${
            item.completed ? "todoItem-done-completed" : ""
          }`}
        />
      </span>
      <p className={item.completed ? "todoItem-text-completed" : ""}>
        {item.text}
      </p>
      <span onClick={onDelete}>
        <MdDeleteForever
          className={`todoItem-delete ${
            item.completed ? "todoItem-delete-completed" : ""
          }`}
        />
      </span>
    </li>
  );
}

export { TodoItem };
