export function CardView({ items, index, getCurrentQuestion }) {
  const { resp, ques } = items;
  getCurrentQuestion(resp);

  return (
    <li className="CardView text-center text-xl" key={index}>
      {ques}
    </li>
  );
}
