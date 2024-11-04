import React from "react";
import "./TodosLoading.css";
import { FaCircleNotch } from "react-icons/fa";


const TodosLoading = () => {
  return (
    <section className="TodoLoading">
      <div className="TodoLoading-icons">
        <FaCircleNotch className="TodoLoading-icons__item"/>

      </div>
    </section>
  );
};
export default TodosLoading;
