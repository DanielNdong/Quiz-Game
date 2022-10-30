import { Fragment, useEffect, useState } from "react";

import { Cards } from "./Cards";
import { Options } from "./Options";
import { Temporizador } from "./Temporizador";
import "./App.css";
import questions from "./questions";
import responses from "./responses";

export default function App() {
  const [respons, setResponses] = useState(responses);
  const [btnValue, setBtnValue] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [numQuest, setNumQuest] = useState(0);
  const [currentTime, setCurrentTime] = useState(15);

  useEffect(() => {
    if (currentTime === 0) return;
    const id = setInterval(() => {
      setCurrentTime((currentTime) => currentTime - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [currentTime]);

  if (currentTime === 0) {
    return <div>Fin del juego</div>;
  }

  const getSetNumQuest = (param) => {
    setNumQuest(param);
  };

  const getCurrentQuestion = (ques) => {
    setCurrentQuestion(ques);
  };

  //Presentar a Roxanna este fragmento de código sobre newValue y btnValue
  //Si el valor devuelto por este metodo es true se pasa a la siguiente pregunta automaticamente
  const getbtnValue = (newValue) => {
    setBtnValue(newValue);
    if (newValue === currentQuestion) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Fragment>
      <Cards
        numQuest={numQuest}
        getSetNumQuest={getSetNumQuest}
        questions={questions}
        getCurrentQuestion={getCurrentQuestion}
      />
      <Options
        numQuest={numQuest}
        item={responses}
        btnValue={btnValue}
        currentQuestion={currentQuestion}
        responses={respons}
        isCorrect={isCorrect}
        getbtnValue={getbtnValue}
      />
      <Temporizador currentTime={currentTime} />
      {/* <p>{currentQuestion}</p>
      <p>{btnValue}</p> */}
    </Fragment>
  );
}
