export function Temporizador({ currentTime }) {
  if (currentTime <= 15 && currentTime > 10) {
    return <div>Te quedan {currentTime} segundos</div>;
  } else if (currentTime <= 10 && currentTime > 5) {
    return <div>{currentTime} ¡Pronto se te acabará el tiempo!</div>;
  } else if (currentTime <= 5) {
    return <div>¡¡Ya casi está quedan: {currentTime}!!</div>;
  }
}
