import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header bgColor="#F39C12" textColor="black" />

      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
