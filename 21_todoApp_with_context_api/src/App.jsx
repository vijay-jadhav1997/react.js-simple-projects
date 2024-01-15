import reactLogo from "./assets/react.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  }
  function updateTodo(id, todo) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { id: prevTodo.id, ...todo } : prevTodo
      )
    );
  }
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo?.isCompleted }
          : prevTodo
      )
    );
  };
  function removeTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  function clearAllTodos() {
    setTodos([]);
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearAllTodos,
        updateTodo,
        toggleComplete,
      }}
    >
      <div className="app flex flex-col gap-y-10 items-center pt-10">
        <h1 className="bg-yellow-200 w-[85%] max-w-[700px] rounded-md shadow-inner shadow-pink-500 py-5 text-3xl font-bold text-center px">
          💥 Mauli Todo Manage App !! ✨
          <br />
          <span className="text-xl font-semibold ml-40 text-pink-600">
            Using <img className="w-10 inline-block" src={reactLogo} alt="" />{" "}
            React Context API
          </span>
        </h1>
        <TodoForm />
        <div className="todo-container flex flex-col gap-y-3 w-[80%] max-w-[600px]">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
