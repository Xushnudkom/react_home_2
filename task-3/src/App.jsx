import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counters, setCounters] = useState([0]);
  const addCounters =()=>{
    let item = counters[counters.length -1]
    counters.push(item)
    setCounters([...counters])
  }

  const incresCount=(index)=>{
    counters[index] += 1
    setCounters([...counters])
  }

  const decreaseCount=(index)=>{
    counters[index] -= 1
    setCounters([...counters])
  }

  return (
    <>
      <div className='container'>      
   <button onClick={addCounters} className='active_but'>Change Actives</button>
   {
     counters?.map((item,index) => {
      return (
          <div key={index} className='two_butts'>
            <button onClick={()=>incresCount(index)} className='task3_but3'>+</button>
            <span>{item}</span>
            <button onClick={() => decreaseCount(index)} className='task3_but4'>-</button>
          </div>
      )

     })
   }
   
   </div>
    </>
  )

}
export default App