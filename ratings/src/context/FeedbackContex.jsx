import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { useEffect } from "react";

const FeedbackContext = createContext();
//the provider below wraps up all our components by passing down children
function FeedbackProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  //add feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback by using promises from package.json
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5001/feedback?_sort=id&_order=desc`);

    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
 
  };

  // this will delete the feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Confirm to delete")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //updates  feedback item <upd updates the items
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5001/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  //Adding feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5001/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    //NOTE: the ...(spread operator) below allows the state to add on feedback and the
    // new one  which is setFeedback from the back end.
    setFeedback([data, ...feedback]);
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
        isLoading,
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
