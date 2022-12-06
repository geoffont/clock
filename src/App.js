import React , { useState } from 'react';
import './App.css';
import Clock from './component/Clock';

function App() {
  const [showClock, setShowClock] = useState(false)
  const handleClick = () => {
    setShowClock(!showClock);
  }
  return (
    <div className="App">
      { showClock ? < Clock  /> : null}
       
      <button onClick={handleClick}>Button</button>
    </div>
  );
}
export default App;