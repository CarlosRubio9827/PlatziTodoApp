import React from "react";
import "./index.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TodoContext } from "../../TodoContext";

const Modal = () => {
  const { toggleModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const title = event.target.title.value;
    addTodo(newTodoValue.trim());
    toggleModal();
    // Previene el envío del formulario
    // Aquí puedes agregar lógica adicional, como validar o procesar el formulario
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className="modal">
      <h2 className="modal-title">Agregar TODO</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">
            Title Todo
          </label>
          <textarea
            className="form-textarea"
            placeholder="Cortar cebolla"
            name="title"
            id="title"
            required
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="form-group-buttons">
          <input
            onClick={() => toggleModal()}
            className="form-button form-button-secondary"
            value={"Cancelar"}
            type="button"
          />
          <input
            className="form-button form-button-primary"
            value={"Agregar"}
            type="submit"
          />
        </div>
      </form>

      <IoMdCloseCircleOutline
        onClick={() => toggleModal()}
        className="modal-close"
      />
    </div>
  );
};

export default Modal;
