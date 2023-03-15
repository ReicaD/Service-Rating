import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./Data/FeedbackData";
import ReviewData from "./Data/ReviewData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Navbar from "./components/Navbar";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
// import { feedbackProvider } from "./Contex/FeedbackContex";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContex";

// import SeeReviews from "./components/SeeReviews";

function App() {
  // const addReviews = (newReviews) => {
  //   newReviews.id = uuidv4();
  //   setReviews([newReviews, ...reviews]);
  // };

  return (
    <FeedbackProvider>
      <div>
        <Header bgColor="#F39C12" textColor="black" />
        <div className="container">
          <Navbar />
          <AboutIconLink />
          {/* <Post/>  */}
        </div>
        {/* <Route path="/post/:id" element={<Post />} />  */}
        {/* <Route path="/post/:id" element={<Post/>} /> */}
      </div>
    </FeedbackProvider>
  );
}

export default App;
