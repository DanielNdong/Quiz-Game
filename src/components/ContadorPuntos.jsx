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
    if (btnValue !== null) {
      setUserErrores();
      setUserAciertos();
    }
  }, [btnValue]);


}
