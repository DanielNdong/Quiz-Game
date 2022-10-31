import { ButtonView } from "./ButtonView";
export function Button({
  item,
  getbtnValue,
  isCorrect,
  btnValue,
  currentQuestion,
  getSetNumQuest,
  numQuest,
}) {
  return (
    <>
      {Object.entries(item).map(([props, opt], index) => {
        //1. Primero se evalua si el valor del boton al que se ha hecho click coincide con el elemento en el arreglo
        //2. Se comprueba si es que el valor del boton al que se a clickado es igual a la respuesta de la pregunta
        //3. Si son iguales a dicho botton se le cambia el color a 'verde' sino pues a rojo
        if (
          btnValue === opt &&
          btnValue === currentQuestion &&
          btnValue !== null
        ) {
          return (
            <div>
              <ButtonView
                getSetNumQuest={getSetNumQuest}
                numQuest={numQuest}
                nameClass={"OptionCorrect"}
                key={index}
                isCorrect={isCorrect}
                opt={opt}
                getbtnValue={getbtnValue}
              />
            </div>
          );
        } else if (
          btnValue === opt &&
          btnValue !== currentQuestion &&
          btnValue !== null
        ) {
          return (
            <div>
              <ButtonView
                getSetNumQuest={getSetNumQuest}
                numQuest={numQuest}
                nameClass={"OptionIncorrect"}
                key={index}
                isCorrect={isCorrect}
                opt={opt}
                getbtnValue={getbtnValue}
              />
            </div>
          );
        } else {
          return (
            <div>
              <ButtonView
                getSetNumQuest={getSetNumQuest}
                numQuest={numQuest}
                nameClass={"AnySelection"}
                key={index}
                isCorrect={isCorrect}
                opt={opt}
                getbtnValue={getbtnValue}
              />
            </div>
          );
        }
      })}
    </>
  );
}
