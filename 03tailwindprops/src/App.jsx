// import { useState } from 'react';

import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <img className="w-24 h-24 rounded-full mx-auto" src="https://godhindus.com/wp-content/uploads/2022/12/ram-ji-images.jpg" alt="" width="384" height="512" />
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4 mt-5' >!! Jay Ram Krushna Hari !!</h1>

      <Card userName= 'Jay Shree Radhe' btnText= 'visit my profile'/>
      <Card userName= 'Jay Shree Radhe Krushna' profileBio= '!! Har Har Mahadev !! Jay Hari'/>
      

    </>
  )
}

export default App
