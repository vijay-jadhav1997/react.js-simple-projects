// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <UserDetails />
      </div>
    </Provider>
  );
}

export default App;
