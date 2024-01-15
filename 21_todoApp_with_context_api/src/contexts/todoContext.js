import { createContext, useContext } from "react";
export const todoContext = createContext({
  todos: [
    {
      id: 1,
      title: "todo title",
      isCompleted: false,
    },
  ],
  addTodo() {},
  updateTodo: () => {},
  removeTodo: () => {},
  clearALlTodos: function () {},
  toggleComplete() {},
});

export const TodoProvider = todoContext.Provider;

export function useTodo() {
  return useContext(todoContext);
}
