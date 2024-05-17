import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  
const increase =()=>{
  setCount((prev) => prev + count1);
}
const plus =()=> {
  setCount1((prev) => prev +1);
}


  return (
    <>
      <div className='container'>
        <h2 className='task1_text1'>Metr: {count}</h2>
        <button onClick={increase} className='task1-but1'>yurish</button>

        <h2 className='task-1_text2'>Qadam kattaligi: {count1}</h2>
        <button onClick={plus} className='task-1_but2'>Qadamni kengaytirish</button>
      </div>
    </>
  )
}

export default App
