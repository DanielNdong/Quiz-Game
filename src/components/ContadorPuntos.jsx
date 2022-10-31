import { useState, useEffect } from "react";

export function ContadorPuntos({ isCorrect, btnValue }) {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    if (isCorrect) {
      setContador((contador) => contador + 1);
    } else if (isCorrect === false && isCorrect !== null && contador > 0) {
      setContador((contador) => contador - 1);
    }
  }, [btnValue]);
  return <div>{contador}</div>;
}
