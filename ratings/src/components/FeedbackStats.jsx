import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculate rating average ** looping through all ratings and adding all ratings together
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //the line below  fixes the decimal place by adding toFixed function and /[.,]0$/, ""
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feeback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Averave rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
FeedbackStats.propTypes ={
    feedback:PropTypes.array.isRequired
}
export default FeedbackStats;
