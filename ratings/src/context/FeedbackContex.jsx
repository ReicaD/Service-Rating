import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();
//the provider below wraps up all our components by passing down children
function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 2,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 3,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 4,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 5,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 6,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 7,
      text: "This is feedback item 1",
      rating: 10
    },
    {
      id: 8,
      text: "This is feedback item 1",
      rating: 10
    },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is newFeedback
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    //this wraps the context from all our components, value takes in functions or states needed.
    <FeedbackContext.Provider value={{ feedback,deleteFeedback,addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
