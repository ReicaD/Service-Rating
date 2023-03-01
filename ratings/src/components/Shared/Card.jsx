//import {FaTimes} from 'react-icons/fa'
import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import FeedbackItem from "../FeedbackItem";

//below a conditional was used to display the card component.
//childern is a node while reverse is a boolean
function Card({ children, reverse, item, text, heading, deleteFeedback }) {
  //return <div className='card reverse'>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "black" : "white",
        color: reverse ? "#fff" : "0000",
      }}
    >
      {/* <FeedbackItem item={item} deleteFeedback={deleteFeedback} /> */}
      <h1>{heading}</h1>

      <p>{text}</p>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
}
//this defines the value of the Proptypes
Card.defaultProps = {
  reverse: false,
  text: "This is card",
  heading: "All ratings",
};
//this defines the type of props
Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  text: PropTypes.string,
  heading: PropTypes.string,
};

export default Card;
