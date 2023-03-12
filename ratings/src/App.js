import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import ReviewData from "./Data/ReviewData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Navbar from "./components/Navbar";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
// import SeeReviews from "./components/SeeReviews";
 

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [reviews, setReviews] = useState(ReviewData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is newFeedback
    setFeedback([newFeedback, ...feedback]);

  };
  const addReviews =(newReviews) =>{
    newReviews.id = uuidv4()
    setReviews([newReviews, ...reviews])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <div>
      <Header bgColor="#F39C12" textColor="black" />
      <div className="container">
        <Navbar />
        <AboutIconLink />
        {/* <SeeReviews/> */}
        {/* <ReviewData handleReviews={addReviews } /> */}
      </div>
    </div>
  );
}

export default App;


