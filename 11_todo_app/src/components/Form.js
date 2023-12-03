import React from "react";
import { FaSquarePlus } from "react-icons/fa6";

const Form = () => {
  return (
    <form className="todo-title">
      <input type="text" className="todo-input" />
      <button type="submit" className="todoBtn">
        <FaSquarePlus />
      </button>
      <div className="select">
        <select name="todos" id="filterTodo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
