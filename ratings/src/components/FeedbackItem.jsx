import { FaTimes } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import react, { useContext,useState } from "react";
// import PropTypes from "prop-types";
import Card from "./Shared/Card";
import MyCard from "./Shared/MyCard";
//import { useEffect } from "react";
import { FeedbackContext } from "../context/FeedbackContex";

function FeedbackItem({ item }) {
  const{deleteFeedback}=useContext(FeedbackContext)
  // const [rating, setRating] = useState("⭐️");
  // const [text, setText] = useState("All feed back Here 🫥");
  // const [count, setCount] = useState(0);
  // console.log(item.text);
  // console.log(FeedbackItem);

   
  return (
    // <Card item={item}  deleteFeedback={deleteFeedback} />

    <MyCard>
      {item.rating >= 5 ? (
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
      <div className="text-display">{item.text}</div>
    </MyCard>
  );
}
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default FeedbackItem;
