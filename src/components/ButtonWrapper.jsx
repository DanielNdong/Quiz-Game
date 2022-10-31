import { useEffect } from "react";
import { Button } from "./Button";
export function ButtonWrapper({
  listResponses,
  getSetNumQuest,
  numQuest,
  getbtnValue,
  isCorrect,
  btnValue,
  currentQuestion,
}) {
  console.log(numQuest);
  //if (numQuest < 7) return <div>Ya no hay mas preguntas</div>;
  var myObject = listResponses.filter((item, i) => i == numQuest);
  return (
    <>
      {myObject.map((item, index) => (
        <Button
          key={index}
          getSetNumQuest={getSetNumQuest}
          btnValue={btnValue}
          currentQuestion={currentQuestion}
          numQuest={numQuest}
          item={item}
          getbtnValue={getbtnValue}
          isCorrect={isCorrect}
        />
      ))}
    </>
  );
}

//return <>{console.log(showArray.join().split(' '))}</>
