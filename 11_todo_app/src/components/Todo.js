import React, { useState } from "react";
import Task from "./Task";

const Todo = () => {
  // const [isCompleted, SetIsCompleted] = useState(false);
  const [allTodos, SetAllTodos] = useState([]);
  const [newTitle, SetNewTitle] = useState("");
  const [newDescription, SetNewDescription] = useState("");

  const addNewTodo = () => {
    const todoDateTime = new Date();
    const todoDate = todoDateTime.toLocaleDateString();
    const todoTime = todoDateTime.toLocaleTimeString();

    const todoObject = {
      id: todoDateTime,
      title: newTitle,
      description: newDescription,
      dateTime: { todoDate, todoTime },
    };

    SetNewDescription("");
    SetNewTitle("");

    const updatedAllTodos = [...allTodos];
    updatedAllTodos.push(todoObject);
    SetAllTodos(updatedAllTodos);
  };

  return (
    <>
      <div className="todo-input flex flex-wrap items-end justify-center gap-4 mb-5 border-b border-b-gray-300 pb-5">
        <div className="todo-title flex flex-col gap-y-1">
          <label className="font-medium" htmlFor="input-title">
            Title :
          </label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              SetNewTitle(e.target.value);
            }}
            className="input-title py-1 outline-green-500 text-black border-none indent-2 px-2"
            placeholder="What is in your mind..?"
          />
        </div>
        <div className="todo-discription flex flex-col gap-y-1">
          <label className="font-medium" htmlFor="input-discription">
            Description :
          </label>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => {
              SetNewDescription(e.target.value);
            }}
            className="input-discription py-1 outline-green-500 text-black border-none indent-2 px-2"
            placeholder="Enter the Task discription..."
          />
        </div>
        <div className="todo-input-item">
          <button
            type="button"
            className="px-4 py-2 rounded-sm bg-green-500 hover:bg-green-600 active:shadow-sm active:shadow-white"
            onClick={addNewTodo}
          >
            Add
          </button>
        </div>
      </div>
      <h2 className="my-5 text-center text-xl font-bold">💥 My Todos 💥</h2>
      <div className="w-full border">
        <div className="buttons my-3">
          <button className="px-3 py-1 hover:bg-green-500" type="button">
            Todo
          </button>
          <button className="px-3 py-1 hover:bg-green-500" type="button">
            Completed
          </button>
        </div>
        <div className="todoList">
          {allTodos.map((todo) => {
            return <Task key={todo?.id} todoData={todo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
