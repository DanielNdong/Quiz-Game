import TemporizadorView from "./TemporizadorView";
import questions from "../request/questions";
export function Temporizador({
  getQuestionsLength,
  currentTime,
  changeIngreseTimeTimer,
  numQuest,
}) {
  console.log("la longitud del arreglo es " + getQuestionsLength());
  if (currentTime <= 30 && currentTime > 10) {
    return (
      <TemporizadorView timer={"Tiempo restante: " + currentTime + "seg"} />
    );
  } else if (currentTime <= 10 && currentTime > 5) {
    changeIngreseTimeTimer(1100);
    return (
      <TemporizadorView
        timer={"¡Pronto se te acabará el tiempo! " + currentTime + "seg"}
      />
    );
  } else if (currentTime <= 5 && currentTime !== 0) {
    changeIngreseTimeTimer(900);
    return (
      <TemporizadorView
        timer={"¡¡El tiempo se agota!! " + currentTime + "seg"}
      />
    );
  } else if (currentTime === 0 || numQuest !== questions.length) {
    return <TemporizadorView timer={"Fin del juego " + currentTime + "seg"} />;
  }
}
