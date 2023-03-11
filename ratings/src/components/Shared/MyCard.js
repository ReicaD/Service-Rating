import React from "react";
import PropTypes from "prop-types";

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
