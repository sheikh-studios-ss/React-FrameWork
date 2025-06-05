import React, { useEffect, useState } from 'react';

const Navbar = ({ color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component mounted");
  }, []);

  useEffect(() => {
    alert("Count changed: " + count);
  }, [count]);

  return (
    <div>
      I am NavBar of {color} color.
      <br />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Navbar;
