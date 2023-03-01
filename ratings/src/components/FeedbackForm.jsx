import { useState } from "react";
import MyCard from "./Shared/MyCard";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  // console.log("empty");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <MyCard>
      {/* @rating select component */}
      <form>
        <h1>Rate your service</h1>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit">
            Send
          </Button>
         
        </div>
      </form>
    </MyCard>
  );
}

export default FeedbackForm;
