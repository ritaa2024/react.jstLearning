import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter ] = useState(15);
  const addValue= ()=>{
    console.log("added",Math.random())
    // prevCounter = prevCounter +1
    setCounter( prevCounter =>prevCounter +1)
    setCounter( prevCounter =>prevCounter +1)
    setCounter( prevCounter =>prevCounter +1)

  }

  const removeValue= ()=>{
    console.log("removed",Math.random())
    if(counter>0){
      counter = counter - 1
      setCounter(counter)

    }
  }
  return (
    <> 
     <h1>The world's best react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>add value {counter}</button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>

    </>
  )
}

export default App
