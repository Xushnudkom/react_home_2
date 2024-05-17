import { useState } from 'react'
import './App.css'

function App() {

  const [welcome, setWelcome] = useState(false);
  

  const LogIn = () => {
    setWelcome(true);
  };

  const LogoOut = () => {
    setWelcome(false);
  };
 return (
    <>
      <div className='container'>
      <div className='task_2'>
      <p className='task_2_text'>{welcome ? 'Log In' : 'welcome'}</p>
      <button onClick={LogIn} className='task2_but1'>Log In</button>
      <button onClick={LogoOut} className='task2_but2'> Log Out</button>
    </div>
      </div>
    </>
  )
}

export default App
