import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
// import Card from "./components/Shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header bgColor="#F39C12" textColor="black" />

      <div className="container">
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
