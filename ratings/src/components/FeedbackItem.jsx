import { FaTimes, FaEdit } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import react, { useContext, useState } from "react";
import Card from "./Shared/Card";
import MyCard from "./Shared/MyCard";
import { FeedbackContext } from "../context/FeedbackContex";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // const [rating, setRating] = useState("⭐️");
  // const [text, setText] = useState("All feed back Here 🫥");
  // const [count, setCount] = useState(0);
  // console.log(item.text);
  // console.log(FeedbackItem);

  return (
    <MyCard>
      {item.rating >= 3 ? (
        <div className="num-display">
          {item.rating}
          <AiFillStar color="#DAA520" size={30} className="mr-5" />
          <br />
        </div>
      ) : (
        <div className="num-display">{item.rating}</div>
      )}
      {/* <div className="num-display">{item.rating}</div> */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="green" />
      </button>
      {/* //adding a button to update the state */}
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </MyCard>
  );
}
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default FeedbackItem;
