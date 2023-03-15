import React, { useState } from "react";
import FeedbackList from "../components/FeedbackList";
import FeedbackData from "../Data/FeedbackData";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
// import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is newFeedback
    setFeedback([newFeedback, ...feedback]);
  };

  // const deleteFeedback = (id) => {
  //   if (window.confirm("Confirm to delete")) {
  //     // //feedback filter returns an array minus the one were deleting.
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
};

export default HomePage;
