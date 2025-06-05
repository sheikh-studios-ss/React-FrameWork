import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';

function App() {
  const [Count, setCount] = useState(20);
  const [Color, setColor] = useState(0);

  // This only logs on color change — no infinite loop
  useEffect(() => {
    alert("Color was changed");
  }, [Color]);

  return (
    <div>
      <Navbar color={Color % 2 === 0 ? "pink" : "yellow"} />
     
      <div>
        This Count Is: {Count}
        <br />
        <button onClick={() => setCount(Count + 1)}>Increment</button>
        <br />
        <button onClick={() => setCount(Count - 1)}>Decrement</button>
        <br />
        <button onClick={() => setColor(Color + 1)}>Change Color</button>
      </div>
    </div>
  );
    <>
    </>
  )
}

export default App;
