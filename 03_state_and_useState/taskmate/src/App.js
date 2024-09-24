// Code practice for section 3-> video 1,2,3

import "./App.css";

import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const handleAdd = function () {
    setCount(++count);
  };

  const handleSub = function () {
    setCount(--count);
  };

  const handleReset = function () {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={() => setCount(++count)} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          SUB
        </button>
        <button onClick={handleReset} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
}
export default App;
