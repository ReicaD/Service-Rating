import { useState,useContext,useEffect } from "react";
 
import MyCard from "./Shared/MyCard";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContex";
//import Card from "./Shared/Card";
// import { NavLink } from "react-router-dom";

function FeedbackForm() {

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

  useEffect(()=> {
     if(feedbackEdit.edit === true){
       setBtnDisabled(false)
       setText(feedbackEdit.item.text)
       setRating(feedbackEdit.item.rating)
     }
     // depencyarray monitors the edit which can help optimize performance and prevent unnecessary re-renders.
  },[feedbackEdit])
  // console.log("empty");
  const handleTextChange = (e) => {
    //this checks the length of the text/message by giving it conditional statements
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Length Must be 10 Characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
    // console.log(setText(e.target.value));
  };
  
  //e.preventDefault" helps the page not repeat rendering and avoiding 404 errs
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        
        addFeedback(newFeedback);
      }
    }
  };
  return (
    <div>
      <MyCard>
        {/* // <Card> */}
        <form onSubmit={handleSubmit}>
          <h1>Rate your service</h1>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a Review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
        {/* </Card> */}
      </MyCard>
    </div>
  );
}

export default FeedbackForm;




 