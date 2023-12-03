import React, { useState } from "react";
import Task from "./Task";

const Todo = () => {
  const [isCompleted, SetIsCompleted] = useState(false);
  return (
    <>
      <div className="bg-slate-800 rounded-full mx-auto mb-8 px-8 py-2 w-max">
        <h2 className="mb-1 text-green-500 w-max pb-2 mx-auto text-2xl font-bold">
          ✨ Todo App using -
          <span className="text-cyan-300 ml-2 decoration-wavy decoration-green-500 decoration-2 underline underline-offset-4 text-4xl">
            React
          </span>{" "}
          ✨
        </h2>
        <div className="py-[2px] rounded-full mx-auto  shadow-md shadow-yellow-500 border-gray-300 border bg-cyan-300 w-20"></div>
      </div>
      <div className="todo-input flex flex-wrap items-end justify-center gap-4 mb-5 border-b border-b-gray-300 pb-5">
        <div className="todo-title flex flex-col gap-y-1">
          <label className="font-medium" htmlFor="input-title">
            Title :
          </label>
          <input
            type="text"
            className="input-title py-1 outline-green-500 text-black border-none indent-2 px-2"
            placeholder="What is in your mind..?"
          />
        </div>
        <div className="todo-discription flex flex-col gap-y-1">
          <label className="font-medium" htmlFor="input-discription">
            Discription :
          </label>
          <input
            type="text"
            className="input-discription py-1 outline-green-500 text-black border-none indent-2 px-2"
            placeholder="Enter the Task discription..."
          />
        </div>
        <div className="todo-input-item">
          <button
            type="button"
            className="px-4 py-2 rounded-sm bg-green-500 hover:bg-green-600 active:shadow-sm active:shadow-white"
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
          <Task />
        </div>
      </div>
    </>
  );
};

export default Todo;
