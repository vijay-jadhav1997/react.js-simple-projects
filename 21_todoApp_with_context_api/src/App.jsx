// import reactLogo from './assets/react.svg'
import { useEffect, useState } from "react";
import "./App.css";

import { TodoProvider } from "./contexts";

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
      <div className="app">
        <h1>💥 This Our App !! ✨</h1>
      </div>
    </TodoProvider>
  );
}

export default App;
