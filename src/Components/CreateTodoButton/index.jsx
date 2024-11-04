import React from "react";
import "./index.css";
import { IoIosAddCircle } from "react-icons/io";
import { TodoContext } from "../../TodoContext";

function CreateTodoButton() {

  const {toggleModal} = React.useContext(TodoContext);

  return (
    <button onClick={() => toggleModal()} className="todoButton">
      <IoIosAddCircle className="todoButton-add" />
    </button>
  );
}

export { CreateTodoButton };
