import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numAllowwed, setNumAllowed] = useState(false)
  const [charAllowwed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  // use Ref hook:
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback (()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowwed) str += '0123456789'
    if (charAllowwed) str += '!@#$%^&*_-+=~`'
    console.log(str);
    console.log(str);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(char);
      
    }
    console.log(pass, typeof(pass));
    setPassword(pass);

    
  }, [length, numAllowwed, charAllowwed, setPassword])

  const copyPasswordToClipbord = useCallback(() => {})
  
  useEffect(()=> {
    passwordGenerator()
  }, [length, numAllowwed, charAllowwed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700' >
        <h1 className='text-white text-center font-medium my-2'>
          Password Generator
        </h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none py-0.5 px-3 bg-blue-700 text-white shrink-0'
            onClick={copyPasswordToClipbord}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="length"
              className='cursor-pointer'
              min={6}
              max={25}
              value={length}
              onChange={(e)=> {setLength(e.target.value)}}
            /> 
            <label htmlFor="length">Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" name="number" id="" 
              className='cursor-pointer'
              defaultChecked={numAllowwed}
              onChange={()=> {setNumAllowed((prevValue) => !prevValue)}}
            /> 
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="character" id="" 
              className='cursor-pointer'
              defaultChecked={charAllowwed}
              onChange={()=> {setCharAllowed((prevValue) => !prevValue)}}
            /> 
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
