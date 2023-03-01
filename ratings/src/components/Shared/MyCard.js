//import {FaTimes} from 'react-icons/fa'
import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
//import FeedbackItem from "../FeedbackItem";

//below a conditional was used to display the card component.
//childern is a node while reverse is a boolean
// item, text, heading, deleteFeedback
function MyCard({ children }) {
  return (
    <div className="card">
      <div>{children}</div>
    </div>
  );
}
//this defines the value of the Proptypes
// MyCard.defaultProps = {
//   reverse: false,
//   text: "This is a rating",
//   heading: "",
// };
//this defines the type of props
MyCard.propType = {
  children: PropTypes.node.isRequired,
  // reverse: PropTypes.bool,
  // text: PropTypes.string,
  // heading: PropTypes.string,
};

export default MyCard;

// <h1>{heading}</h1>

// <p>{text}</p>
// <div className="num-display">{item.rating}</div>
// <button onClick={() => deleteFeedback(item.id)} className="close">
//   <FaTimes color="green" />
// </button>
// <div className="text-display">{item.text}</div>
