import { FaTimes } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import react, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Shared/Card";
import MyCard from "./Shared/MyCard";
//import { useEffect } from "react";

function FeedbackItem({ item, deleteFeedback }) {
  const [rating, setRating] = useState("⭐️");
  const [text, setText] = useState("All feed back Here 🫥");
  const [count, setCount] = useState(0);
  console.log(item.text);
  console.log(FeedbackItem);

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
    // <Card item={item}  deleteFeedback={deleteFeedback} />

    <MyCard>
      {item.rating >= 5 ? (
        <div className="num-display">
          {item.rating}
          <AiFillStar color="black" size={30} className="mr-5"/>
          <br />
        </div>
      ) : (
        <div className="num-display">{item.rating}</div>
      )}
      {/* <div className="num-display">{item.rating}</div> */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </MyCard>

    /* <button onClick={() => console.log(item.id)} className="close">
        <FaTimes color="green" />
      </button> */

    // <div className="num-display">{item.rating}</div>
    // <div className="text-display">{item.text}</div>

    // <div className="num-display-count">{count}</div>

    // <button onClick={increment}>❤️</button>
    // <br />
    // <button onClick={decrement}> 😡</button>
    // <br />
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
