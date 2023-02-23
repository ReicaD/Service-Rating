import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback Yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
//arrayof or object of can be passed in, to shape the status of the proptypes
FeedbackList.propTypes={
feedback: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
)
}


export default FeedbackList;

{
  /* <div>{item.text}</div> */
}
