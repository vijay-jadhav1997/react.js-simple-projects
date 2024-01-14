import { createContext, useContext } from "react";
const todoContext = createContext({
  todos: [
    {
      id: 1,
      title: "todo title",
      isCompleted: false,
    },
  ],
  addTodo(todo) {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  clearALlTodos: function () {},
  toggleComplete(id) {},
});

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
  return useContext(todoContext);
}
