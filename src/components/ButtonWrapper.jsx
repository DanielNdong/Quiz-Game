import { Button } from "./Button";
export function ButtonWrapper({
  listResponses,
  getSetNumQuest,
  numQuest,
  getbtnValue,
  isCorrect,
  btnValue,
  currentQuestion,
  currentTime,
}) {
  if (currentTime === 0) return;
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
