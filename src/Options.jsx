import { useEffect } from "react"
import {Button} from "./Button"
export function Options({ numQuest, responses, getbtnValue, isCorrect, btnValue, currentQuestion }){
 
  var myObject = responses.filter((item, i) => i == numQuest )
return (<>
    {
        myObject.map((item,index) => ( 
          <Button key={index} btnValue={btnValue} currentQuestion={currentQuestion} item={item} getbtnValue={getbtnValue} isCorrect={isCorrect}/>
          )
          )}
  </>)
}

  //return <>{console.log(showArray.join().split(' '))}</>
