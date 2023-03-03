import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
//import MyCard from "./components/Shared/MyCard";
import AboutPage from "./pages/AboutPage";
// import Card from "./components/Shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is newFeedback
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    

    <Routes>
        <div className="container">
      <Header bgColor="#F39C12" textColor="black" />
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
          <AboutPage />
          <br />
          <hr />
          <br />
          <Route path="/about" component={AboutPage} />
        </div>
      </Routes>
  
  );
}

export default App;
