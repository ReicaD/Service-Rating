import react, { useState } from "react";
//import { useEffect } from "react";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState("⭐️");
  const [text, setText] = useState("All feed back Here 🫥");
  const [count, setCount] = useState(0);
  console.log(item.text);
  console.log(FeedbackItem);

  const handleClick = () => {
    setRating(40);
  };
  const increment = () => {
    // setState({ ...state,  count + 1 });
    return setCount(count + 1);
  };
  const handleText = () => {
    return setText("Top viewers");
  };
  const decrement = () => {
    // setState({ ...state, count - 1 });
    return setCount(count - 1);
  };
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>

      <div className="num-display-count">{count}</div>

      <button onClick={increment}>❤️</button>
      <br />
      <button onClick={decrement}> 😡</button>
      <br />
      
    </div>
  );
}

export default FeedbackItem;
