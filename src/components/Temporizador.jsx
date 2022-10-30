export function Temporizador({ currentTime, changeIngreseTimeTimer }) {
  if (currentTime <= 15 && currentTime > 10) {
    return <div>Tiempo restante: {currentTime} </div>;
  } else if (currentTime <= 10 && currentTime > 5) {
    changeIngreseTimeTimer(1100);
    return <div> ¡Pronto se te acabará el tiempo! {currentTime}</div>;
  } else if (currentTime <= 5) {
    changeIngreseTimeTimer(900);
    return <div>¡¡El tiempo se agota!!{currentTime}</div>;
  }
}
