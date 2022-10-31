import { useState, useEffect } from "react";
import questions from "../request/questions";

export function ContadorPuntos({
  btnValue,
  aciertos,
  errores,
  setUserAciertos,
  setUserErrores,
}) {
  useEffect(() => {
    setUserErrores();
    setUserAciertos();
  }, [btnValue]);

  return (
    <div>
      Aciertos: {aciertos} Errores: {errores}
    </div>
  );
}
