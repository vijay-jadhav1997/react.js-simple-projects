import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { addTodo } = useTodo();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoTitle !== "") {
      addTodo({ title: todoTitle, isCompleted: false });
      setTodoTitle("");
    } else {
      alert("Please, enter todo title first..!");
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex justify-between w-[80%] max-w-[600px] "
    >
      <input
        type="text"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Enter your todo todoTitle here..."
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
