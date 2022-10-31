import { Fragment, useEffect, useState } from "react";

import { Cards } from "../components/Cards";
import { ButtonWrapper } from "../components/ButtonWrapper";
import { Temporizador } from "../components/Temporizador";
import { ContadorPuntos } from "../components/ContadorPuntos";
import "./styles/App.css";
import questions from "../request/questions";
import responses from "../request/responses";

export default function App() {
  const [respons, setResponses] = useState(responses);
  const [btnValue, setBtnValue] = useState(null); //Valor del boton al hacer click
  const [currentQuestion, setCurrentQuestion] = useState(null); //Pregunta actual / cambiar pregunta
  const [isCorrect, setIsCorrect] = useState(null); //Respuesta acertada o no acertada
  const [numQuest, setNumQuest] = useState(0); //Indice de la respuesta actual / cambiar indice
  const [currentTime, setCurrentTime] = useState(15); //Tiempo actual
  const [increasedTime, setIncreasedTime] = useState(1800); //Vecidad del cambio de tiempo de los intervalos

  //Actualizamos el temporizador cada vez que cambia el valor de la variable 'btnValue'
  useEffect(() => {
    if (currentTime === 0) return;
    const id = setInterval(() => {
      setCurrentTime((currentTime) => currentTime - 1);
    }, increasedTime);

    return () => clearInterval(id);
  }, [currentTime]);

  //Metodo para cambiar la velocidad de incremento del temporizador
  const changeIngreseTimeTimer = (increaser) => {
    setIncreasedTime(increaser);
  };
  //Establecemos el indice que nos encontramos en el array
  const getSetNumQuest = (param) => {
    setNumQuest(param);
  };
  //Establecemos la pregunta correspondiente
  const getCurrentQuestion = (ques) => {
    setCurrentQuestion(ques);
  };

  if (currentTime === 0) {
    return <div>Fin del juego</div>;
  }

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
      <ButtonWrapper
        getSetNumQuest={getSetNumQuest}
        numQuest={numQuest}
        listResponses={responses}
        btnValue={btnValue}
        currentQuestion={currentQuestion}
        isCorrect={isCorrect}
        getbtnValue={getbtnValue}
      />
      <Temporizador
        currentTime={currentTime}
        changeIngreseTimeTimer={changeIngreseTimeTimer}
      />
      <ContadorPuntos isCorrect={isCorrect} btnValue={btnValue} />
    </Fragment>
  );
}
