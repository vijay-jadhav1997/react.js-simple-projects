import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='fixed flex align-top top-0 right-0 bottom-0 left-0 duration-200'
      style={{backgroundColor: color}}
    >
      <h1 className='rounded-md bg-white fixed top-3 right-5 left-5  py-4 text-center px-4 font-sans font-bold  '
      >Set Background Color as buttons color just hitting that button </h1>
      <div className="absolute flex flex-wrap justify-center gap-3 left-2 right-2 top-20  p-5 bg-white rounded-xl">
        <button
          onClick={() => setColor('black')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-lg -visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          style={{backgroundColor: 'black'}}
        >
          Black
        </button>
        <button
          onClick={() => setColor('orange')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'orange'}}
        >
          Orange
        </button>
        <button
          onClick={() => setColor('violet')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'violet'}}
        >
          violet
        </button>
        <button
          onClick={() => setColor('pink')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'pink'}}
        >
          pink
        </button>
        <button
          onClick={() => setColor('gray')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'gray'}}
        >
          gray
        </button>
        <button
          onClick={() => setColor('yellow')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'yellow'}}
        >
          yellow
        </button>
        <button
          onClick={() => setColor('red')}
          type="button"
          className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'red'}}
        >
          Red
        </button>
        <button
          onClick={() => setColor('green')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'green'}}
        >
          Green
        </button>
        <button
          onClick={() => setColor('cyan')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'cyan'}}
        >
          cyan
        </button>
        <button
          onClick={() => setColor('purple')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'purple'}}
        >
          purple
        </button>
        <button
          onClick={() => setColor('blue')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-lg   "
          style={{backgroundColor: 'blue'}}
        >
          Blue
        </button>
        <button
          onClick={() => setColor('white')}
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-lg   "
          style={{backgroundColor: 'white'}}
        >
          white
        </button>
        
      </div>

    </div>
  )
}

export default App
