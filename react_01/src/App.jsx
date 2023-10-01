import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
