import { useState } from "react";
import Card from "./Shared/Card";
import MyCard from "./Shared/MyCard";

function FeedbackForm() {
  const [text, setText] = useState("");
  console.log("empty");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <MyCard>
      <form>
        <h1>How would you Rate your service</h1>
        <div className="input-group">
          {/* onChange is used as an event handler for whatever that will be typed in this will fire off  */}
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>

      {/* @rating select component */}
    </MyCard>
  );
}

export default FeedbackForm;
