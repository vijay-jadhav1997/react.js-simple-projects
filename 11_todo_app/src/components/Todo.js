import React, { useEffect, useState } from "react";
import clock from "../assets/clock.png";
import bin from "../assets/bin.png";
import correct from "../assets/correct.png";
// import Task from "./Task";

const Todo = () => {
  // const [isCompleted, SetIsCompleted] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect((e) => {
    const savedTodo = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodo) {
      setAllTodos(savedTodo);
    }
  }, []);

  const addNewTodo = () => {
    if (newTitle === "") {
      alert("Please enter your Task Title.");
    } else if (newDescription === "") {
      alert("Please enter your Task Description.");
    } else {
      const todoDateTime = new Date();
      const todoDate = todoDateTime.toLocaleDateString();
      const todoTime = todoDateTime.toLocaleTimeString();

      const todoObject = {
        id: todoDateTime,
        title: newTitle,
        description: newDescription,
        dateTime: { todoDate, todoTime },
      };

      setNewDescription("");
      setNewTitle("");

      const updatedAllTodos = [...allTodos];
      updatedAllTodos.push(todoObject);
      setAllTodos(updatedAllTodos);
      localStorage.setItem("todoList", JSON.stringify(updatedAllTodos));
    }
  };

  const deleteTodo = ({ id }) => {
    let reducedTodoList = allTodos.filter((todo) => todo?.id !== id);
    setAllTodos(reducedTodoList);
    localStorage.setItem("todoList", JSON.stringify(reducedTodoList));
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
              setNewTitle(e.target.value);
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
            maxLength="150"
            onChange={(e) => {
              setNewDescription(e.target.value);
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
      <div className="w-full">
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
            const { title, description, dateTime } = todo;

            return (
              <div
                key={todo?.id}
                className="relative px-4 pb-2 rounded-md bg-slate-500 my-2 flex items-center justify-between hover:bg-slate-600"
              >
                <div className="w-[80%]">
                  <p className="top-[2px] left-[10%] mb-1 text-gray-300">
                    <img src={clock} className="w-4 inline-block mr-1" alt="" />
                    {dateTime?.todoDate} : {dateTime?.todoTime}
                  </p>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
                <div className="icons flex gap-x-1 lg:gap-3 lg:pr-[20px]">
                  <img
                    title="delete task"
                    onClick={() => {
                      deleteTodo(todo);
                    }}
                    className="w-10 rounded-full hover:p-[2px] hover:text-white cursor-pointer"
                    src={bin}
                    alt=""
                  />
                  <img
                    title="mark task completed"
                    className="w-10 rounded-full hover:p-[2px] hover:text-white cursor-pointer"
                    src={correct}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
