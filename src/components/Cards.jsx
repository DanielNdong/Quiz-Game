import { CardView } from "./CardView";
import "./styles/Cards.css";
export function Cards({ numQuest, questions, getCurrentQuestion, currentTime }) {
  if(currentTime===0) return
  var newQuestion = questions.filter((item, i) => i == numQuest);
  return (
    <section>
      <ul className="w-9/12 h-full flex justify-center items-center mx-auto text-white text-2xl select-none">
        {newQuestion.map((item, index) => (
          <CardView
            items={item}
            index={index}
            getCurrentQuestion={getCurrentQuestion}
          />
        ))}
      </ul>
    </section>
  );
}
