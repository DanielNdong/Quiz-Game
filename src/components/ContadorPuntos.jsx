import { useEffect } from "react";
//import questions from "../request/questions";
export function ContadorPuntos({ btnValue, setUserAciertos, setUserErrores }) {
  useEffect(() => {
    if (btnValue !== null) {
      setUserErrores();
      setUserAciertos();
    }
  }, [btnValue]);
}
