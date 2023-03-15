import { createContext, useState } from "react";

const FeedbackContext = createContext();
//the provider below wraps up all our components by passing down children
function FeedbackProvider({ children }) {
  const [feedback] = useState([
    {
      id: 1,
      text: "This is from context",
      reting: 10,
    },
    {
      id: 1,
      text: "This is from context",
      reting: 10,
    },
  ]);
  // console.log(setFeedback)
  return (
    //this wraps the context from all our components, value takes in functions or states needed.
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
