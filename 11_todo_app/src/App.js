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
