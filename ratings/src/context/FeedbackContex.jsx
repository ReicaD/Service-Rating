import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();
//the provider below wraps up all our components by passing down children
function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 11",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 12",
      rating: 10,
    },
    {
      id: 3,
      text: "This is feedback item 45",
      rating: 10,
    },
    {
      id: 4,
      text: "This is feedback item 133",
      rating: 10,
    },
    {
      id: 5,
      text: "This is feedback item 881",
      rating: 10,
    },
    {
      id: 6,
      text: "This is feedback item 100",
      rating: 10,
    },
    {
      id: 7,
      text: "This is feedback item 871",
      rating: 10,
    },
    {
      id: 8,
      text: "This is feedback item 154",
      rating: 10,
    },
  ]);
  //add feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // this will delete the feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Confirm to delete")) {
      // //feedback filter returns an array minus the one were deleting.
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //updates  feedback item <upd updates the items
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ?{...item, ...updItem}:item))
  }

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
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
