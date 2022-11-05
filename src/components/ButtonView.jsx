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
      className={
        "w-2/3 text-white font-semibold my-3 p-6 transition ease-in-out duration-300 max-w-sm mx-auto bg-white rounded-xl flex justify-center space-x-4 drop-shadow-lg border border-white hover:bg-zinc-100 hover:text-black " +
        nameClass
      }
      onClick={() => {
        getbtnValue(buttonRef.current.value);
        setTimeout(() => {
          nextQuestion();
        }, 600);
      }}
      ref={buttonRef}
      value={opt}
    >
      {opt}
    </button>
  );
}
