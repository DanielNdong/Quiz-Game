import { useEffect } from "react";
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
  const nextQuestion = () => {
    getbtnValue(null);
    getSetNumQuest(numQuest + 1);
  };

  return (
    <button
      key={index}
      className={
        "w-2/3 text-white font-semibold my-3 p-6 transition ease-in-out duration-300 max-w-sm mx-auto  rounded-xl flex justify-center space-x-4 drop-shadow-lg border border-white active:bg-zinc-100 active:text-black " +
        nameClass
      }
      onClick={(e) => {
        getbtnValue(e.target.value);
        setTimeout(() => {
          nextQuestion();
        }, 600);
      }}
      value={opt}
    >
      {opt}
    </button>
  );
}
