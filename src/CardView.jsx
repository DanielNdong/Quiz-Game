export function CardView({ items, index, getCurrentQuestion }){ 
    const { resp, ques } = items
    getCurrentQuestion(resp)
   
    return <li className="CardView" key={index}>{ques}</li>;
}

