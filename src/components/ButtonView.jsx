import { useEffect, useRef } from "react";
import "./styles/Button.css";
import questions from "../request/questions";

export function ButtonView({
  opt,
  getbtnValue,
  index,
  nameClass,
  numQuest,
  getSetNumQuest,
}) {
  var buttonRef = useRef();

  const nextQuestion = () => {
    getSetNumQuest(numQuest + 1);
  };
  return (
    <button
      key={index}
      className={nameClass}
      //className= {isCorrect === null ? 'AnySelection' : isCorrect ? 'OptionCorrect' : 'OptionIncorrect' }
      onClick={() => {
        nextQuestion();
        getbtnValue(buttonRef.current.value);
      }}
      ref={buttonRef}
      value={opt}
    >
      {opt}
    </button>
  );
}
