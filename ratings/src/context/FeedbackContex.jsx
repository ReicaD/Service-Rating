import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { useEffect } from "react";

const FeedbackContext = createContext();
//the provider below wraps up all our components by passing down children
function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);
  //add feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedback()
  }, []);

  //fetch feedback by using promises from package.json
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5001/feedback?_sort=id&_order=desc`
    );

    const data = await response.json();
    setFeedback(data)
  };
  // this will delete the feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //updates  feedback item <upd updates the items
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is newFeedback
    setFeedback([newFeedback, ...feedback]);
  };
  //setting the items to be updated by passing in an object from state
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    //this wraps the context from all our components, value takes in functions or states needed.
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
