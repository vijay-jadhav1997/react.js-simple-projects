import { useState } from 'react';
import './App.css'

function App() {
  // useState(0);
  let [counter, setCounter] = useState(0)
  // let counter = 0;
  const increment = ()=> {
    // console.log(counter = counter + 1);
    if (counter < 100) {
      counter++;
    }
     setCounter(counter);
  }
  const decrement = ()=> {
    // console.log(counter = counter - 1);
    if (counter > 0) {
      counter--;
    }
    setCounter(counter);
  }
  const reset = ()=> {
    // console.log(counter = counter - 1);
    counter = 0;
    setCounter(counter);
  }
  return (
    <>
      <h1>!! Ram Krushna Hari !!</h1>
      <h2>This is a Simple Counter</h2>
      <p>( Here you can count between 0 to 100. )</p>
      <div className="box">
        <h3>{counter}</h3>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
