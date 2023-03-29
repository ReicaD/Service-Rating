import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContex";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Shared/Spinner";
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  // console.log("this is feedback",feedback);
  // if (!isLoading && (!feedback || feedback.length === 0)) {
  //   return <p>No feedback Yet!</p>;
    // console.log("No feedback Yet");
  // }
  //passing the items from app into feedbacklist

  return isLoading ? (
   <Spinner/>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default FeedbackList;

//   {/* {/* <motion.div
//   layout
//   data-isOpen={isOpen}
//   initial={{ borderRadius: 50 }}
//   className="parent"
//   onClick={() => setIsOpen(!isOpen)}
//   >
//   <motion.div layout className="child" />
// </motion.div> */}

// return (
//     <div className="feedback-list">
//       {feedback.map((item) => (
//           <FeedbackItem
//             key={item.id}
//             item={item}
//             deleteFeedback={deleteFeedback}
//           />
//         ))}
//       </div>
//   // );
// arrayof or object of can be passed in, to shape the status of the proptypes
// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//           })
//         )
