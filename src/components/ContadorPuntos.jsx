import { useEffect } from "react";
import questions from "../request/questions";
export function ContadorPuntos({
  btnValue,
  aciertos,
  errores,
  currentTime,
  changeCurrentTime,
  setUserAciertos,
  setUserErrores,
}) {
  useEffect(() => {
    setUserErrores();
    setUserAciertos();
  }, [btnValue]);

  if (aciertos + errores === questions.length && currentTime !== 0) {
    console.log(currentTime);
    changeCurrentTime(0);
    return <>hecho esta</>;
  }

  /*  <div>
      <div>FIN DEL QUIZ GAME</div>
      <div>Acertaste {aciertos}/6 preguntas</div>
      <div>Fallaste {errores}/6 preguntas</div>
    </div> */
}
