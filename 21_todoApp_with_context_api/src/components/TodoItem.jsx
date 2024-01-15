import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoItem({ todo }) {
  const [titleMsg, setTitleMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const { updateTodo, removeTodo, toggleComplete } = useTodo();

  const handleEditTodo = () => {
    setIsTodoEditable(!isTodoEditable);

    if (isTodoEditable) {
      updateTodo(todo.id, { ...todo, title: titleMsg });
    }
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={titleMsg}
        onChange={(e) => setTitleMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {!todo.isCompleted ? (
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 "
          onClick={handleEditTodo}
        >
          {isTodoEditable ? "📂" : " ✏"}
        </button>
      ) : (
        ""
      )}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
