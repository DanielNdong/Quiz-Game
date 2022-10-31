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
  const [currentQuestion, setCurrentQuestion] = useState(null); //Respuesta actual / cambiar respuesta
  const [isCorrect, setIsCorrect] = useState(null); //Respuesta acertada o no acertada
  const [numQuest, setNumQuest] = useState(0); //Indice de la respuesta actual / cambiar indice
  const [currentTime, setCurrentTime] = useState(15); //Tiempo actual
  const [increasedTime, setIncreasedTime] = useState(1800); //Vecidad del cambio de tiempo de los intervalos
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
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

  //Contabilizar aciertos y errores
  if (aciertos + errores === questions.length && currentTime !== 0) {
    return (
      <>
        <div>FIN DEL QUIZ GAME</div>
        <div>Acertaste {aciertos}/6 preguntas</div>
        <div>Fallaste {errores}/6 preguntas</div>
      </>
    );
    //Si se agota el tiempo se muestra ese mensaje
  } else if (currentTime === 0 && aciertos + errores < questions.length) {
    return <div>Se te agotó el tiempo</div>;
  }

  //setErrores
  const setUserErrores = () => {
    if (isCorrect === false && isCorrect !== null) {
      setErrores((err) => err + 1);
    }
  };

  //setAciertos
  const setUserAciertos = () => {
    if (isCorrect) {
      setAciertos((acier) => acier + 1);
    }
  };
  //Detectar si ya se respondieron todas las preguntas
  console.log(numQuest);
  console.log("Aciertos: " + aciertos);
  console.log("Errores: " + errores);

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
      <ContadorPuntos
        setUserAciertos={setUserAciertos}
        setUserErrores={setUserErrores}
        aciertos={aciertos}
        errores={errores}
        btnValue={btnValue}
        numQuest={numQuest}
      />
    </Fragment>
  );
}
