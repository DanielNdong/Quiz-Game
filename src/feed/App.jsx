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
  const [currentTime, setCurrentTime] = useState(30); //Tiempo actual
  const [increasedTime, setIncreasedTime] = useState(1800); //Vecidad del cambio de tiempo de los intervalos
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);

  //Actualizamos el temporizador cada vez que cambia el valor de la variable 'btnValue'
  useEffect(() => {
    if (currentTime === 0) return;
    if(numQuest === questions.length) return setCurrentTime(currentTime);
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

  const changeCurrentTime = (time) => {
    setCurrentTime(time);
  };

  //setErrores
  const setUserErrores = () => {
    if (isCorrect === false && isCorrect !== null) {
      setErrores((err) => err + 1);
    }
  };

  //setAciertos
  const setUserAciertos = () => {
    if (isCorrect && isCorrect !== null) {
      setAciertos((acier) => acier + 1);
    }
  };

  const getQuestionsLength = () => {
    return questions.length;
  };

  //console.log(questions.length + " su tipo");

  //Si el valor devuelto por este metodo es true se pasa a la siguiente pregunta automaticamente
  const getbtnValue = (newValue) => {
    setBtnValue(newValue);
    if (newValue === currentQuestion) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  if (currentTime !== 0 && aciertos + errores === getQuestionsLength) {
    return (
      <main>
        <Temporizador currentTime={currentTime} />
        <article className="h-20 flex gap-3 text-white text-2xl flex justify-center">
          <span>Son los Aciertos: {aciertos}</span>{" "}
          <span>Son los Errores: {errores}</span>
        </article>
      </main>
    );
  }

  return (
    <main>
      <Temporizador
        numQuest={numQuest}
        getQuestionsLength={getQuestionsLength}
        currentTime={currentTime}
        changeCurrentTime={changeCurrentTime}
        changeIngreseTimeTimer={changeIngreseTimeTimer}
      />
      <section>
        <Cards
          numQuest={numQuest}
          getSetNumQuest={getSetNumQuest}
          questions={questions}
          getCurrentQuestion={getCurrentQuestion}
          currentTime={currentTime}
        />
        <section className="button-container">
          <ButtonWrapper
            currentTime={currentTime}
            getSetNumQuest={getSetNumQuest}
            numQuest={numQuest}
            listResponses={responses}
            btnValue={btnValue}
            currentQuestion={currentQuestion}
            isCorrect={isCorrect}
            getbtnValue={getbtnValue}
          />
        </section>
        <ContadorPuntos
          setUserAciertos={setUserAciertos}
          setUserErrores={setUserErrores}
          aciertos={aciertos}
          errores={errores}
          btnValue={btnValue}
          currentTime={currentTime}
          changeCurrentTime={changeCurrentTime}
        />
      </section>
      <article className="h-20 flex gap-3 text-white text-2xl flex justify-center">
        <span>Aciertos: {aciertos}</span> <span>Errores: {errores}</span>
      </article>
    </main>
  );
}
