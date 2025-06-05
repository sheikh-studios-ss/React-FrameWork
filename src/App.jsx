import './App.css'
import { useState } from 'react'

function App() {

  const [Count, setCount] = useState(20)

  return (
    <>
    <div>
      <div>
      This Count Is: {Count}
      <br />
      <button onClick={()=>{setCount(Count + 1)}}>Increment</button>
      </div>

      <div>
  
      <button onClick={()=>{setCount(Count - 1)}}>Decrement</button>
      </div>

    </div>


    </>
  )
}

export default App
