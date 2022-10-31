import { useState } from "react";
import { CardView } from "./CardView";

export function Cards({ numQuest, questions, getCurrentQuestion }) {
  var newQuestion = questions.filter((item, i) => i == numQuest);
  return (
    <ul>
      {newQuestion.map((item, index) => (
        <>
          <CardView
            items={item}
            index={index}
            getCurrentQuestion={getCurrentQuestion}
          />
        </>
      ))}
    </ul>
  );
}
