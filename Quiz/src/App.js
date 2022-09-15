import React, { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React - це ... ?",
    variants: ["Бібліотека", "Фреймворк", "Додаток"],
    correct: 0,
  },
  {
    title: "Компонент - це ... ",
    variants: ["Додаток", "Частина додатку або сторінки", "Без поняття"],
    correct: 1,
  },
  {
    title: "Що таке JSX?",
    variants: [
      "Це простий HTML",
      "Це функція",
      "Це HTML, но з можливістю виконувати JS-код",
    ],
    correct: 2,
  },
  {
    title: "Що таке Redux?",
    variants: ["Це локальний стейт", "Це функція", "Це глобальний стейт"],
    correct: 2,
  },
  {
    title: "Що таке SPA?",
    variants: [
      "Це простий HTML",
      "Це односторінковий додаток",
      "Це назва компонента",
    ],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="#"
      />
      <h2>Ви відгадали {correct} варіанти з 5</h2>
      <a href="/">
        <button>Спробувати знову</button>
      </a>
    </div>
  );
}

function Game({ question, step, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            onClick={() => {
              onClickVariant(index);
            }}
            key={text}
          >
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} step={step} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
