import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(1);
   // const [name, setName] = useState('');
    // const [is, setIs] = useState(true);

    const fnc = () => {
        setCount(count + 1);
        document.getElementById('msg').innerHTML = count;
    }
  return (
    <div className="App">
      <h1>React</h1>
      <p id='msg'>{count}</p>
      <button onClick={fnc}>button</button>
    </div>
  );
}

export default App;
