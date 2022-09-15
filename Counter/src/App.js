import React, { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Лічильник :</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(Number(count) - 1);
          }}
          className="minus"
        >
          Мінус
        </button>
        <button
          onClick={() => {
            setCount(Number(count) + 1);
          }}
          className="plus"
        >
          Плюс
        </button>
        <br />
        <button
          onClick={() => {
            setCount(Math.sqrt(Number(count)).toFixed(2));
          }}
          className="square_root"
        >
          Квадратний корінь
        </button>
        <button
          onClick={() => {
            console.log(count);
            setCount(Math.pow(count, 2).toFixed(2));
          }}
          className="squared"
        >
          У квадраті
        </button>
        <br />
        <button
          onClick={() => {
            setCount(count - count);
          }}
          className="reset"
        >
          Скинути значення
        </button>
      </div>
    </div>
  );
}

export default App;
