import TemporizadorView from "./TemporizadorView";

export function Temporizador({
  aciertos,
  errores,
  getQuestionsLength,
  changeCurrentTime,
  currentTime,
  changeIngreseTimeTimer,
}) {

  
  if (currentTime <= 30 && currentTime > 10) {
    return <TemporizadorView timer={"Tiempo restante: " + currentTime} />;
  } else if (currentTime <= 10 && currentTime > 5) {
    changeIngreseTimeTimer(1100);
    return (
      <TemporizadorView
        timer={"¡Pronto se te acabará el tiempo! " + currentTime}
      />
    );
  } else if (currentTime <= 5 && currentTime !== 0) {
    changeIngreseTimeTimer(900);
    return <TemporizadorView timer={"¡¡El tiempo se agota!! " + currentTime} />;
  } else if (currentTime === 0) {
    return <TemporizadorView timer={"Fin del juego"} />;
  }
}
