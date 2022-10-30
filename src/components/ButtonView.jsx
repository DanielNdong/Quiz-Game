import { useState, useRef } from "react";
import "./styles/Button.css";

export function ButtonView({ opt, getbtnValue, isCorrect, index, nameClass }) {
  var buttonRef = useRef();
  return (
    <button
      key={index}
      className={nameClass}
      //className= {isCorrect === null ? 'AnySelection' : isCorrect ? 'OptionCorrect' : 'OptionIncorrect' }
      onClick={() => getbtnValue(buttonRef.current.value)}
      ref={buttonRef}
      value={opt}
    >
      {opt}
    </button>
  );
}
