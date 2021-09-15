import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const handleClick = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {number}
        <button onClick={handleClick}>Novo número</button>
      </header>
    </div>
  );
}

export default App;
