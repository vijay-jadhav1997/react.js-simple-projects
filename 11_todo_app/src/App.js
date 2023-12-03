import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <div className="app bg-slate-900 w-screen h-screen text-white px-5 py-3">
        <header className="mb-5 mx-auto max-w-[800px] rounded-xl px-12 bg-slate-700 py-2">
          <h1 className="mx-auto text-2xl py-2 font-bold text-center">
            !! Shree Dnyanoba Mauli Tukaram !!
          </h1>
        </header>
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
        <div className="main mx-auto max-w-2xl bg-slate-700 p-5 rounded-sm">
          <Todo />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

// ReactDOM.render(<App></App>, document.getElementById("root"));
