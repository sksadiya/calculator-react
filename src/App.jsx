import { useEffect, useState } from 'react'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [input, setInput] = useState('0')
  const [result, setResult] = useState(null)
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setInput(new Function("return " + input)());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };
  return (
      <div className="container justify-content-center align-items-center ">
        <h2>My Calculator</h2>
        <div className="card bg-dark text-white" style={{ width: "400px" }}>
          <Display input={input} result={result} />
          <Buttons handleClick={handleClick} />
        </div>
      </div>
  )
}

export default App
