import { useState } from 'react';
import './App.css';
import Result from './Result';
const secretNo = Math.floor(Math.random() * 10) + 1
function App() {

  const [num, setNum] = useState("")

    const handleChange=(e)=> {
    setNum(e.target.value)
  }
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="" className="heading">
          Guess the number between 1 to 10 answer:{secretNo}
        </label>
      </div>
      <input 
            type="text"
            name='num'
            onChange={handleChange}
       />
      <Result num={parseInt(num)} secretNo={secretNo}></Result>
    </div>
  );
}

export default App;
