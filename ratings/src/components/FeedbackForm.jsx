import Card from "./Shared/Card";
import MyCard from "./Shared/MyCard";

function FeedbackForm() {
  console.log("empty");
  return (
    <MyCard>
      {/* <div> */}
      <h1>Form</h1>
        <form inputType="text" placeholder="add Review"/>
      {/* </div> */}
    </MyCard>
  );
}

export default FeedbackForm;
