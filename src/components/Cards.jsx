import { useState } from "react"
import { CardView } from "./CardView"

export function Cards({ numQuest, getSetNumQuest, questions, getCurrentQuestion}){/* 
    function lisenIndex(index){
        if(index === 2) {return }
        console.log('Hurra!')
    } */
    //var numQuest = 0
   const nextQuestion = () => {
       if(numQuest === questions.length -1) return <div>Fin del juego!</div>
       getSetNumQuest(numQuest + 1)
        }
          var  newQuestion = questions.filter((item, i) => i == numQuest)

    return (
        <ul>
            {newQuestion.map((item, index) =>  (
            <>
                <CardView items={item} index={index} getCurrentQuestion={getCurrentQuestion}/>
                <button onClick={() => nextQuestion() }>Siguiente pregunta</button>
            </>
            )
            )}
        </ul>
    )
}   