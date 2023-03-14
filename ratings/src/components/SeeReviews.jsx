import React, { useState } from "react";
import MyCard from "./Shared/MyCard";
import ReviewData from "../Data/ReviewData";
//  import { v4 as uuidv4 } from "uuid";
// import { Link, NavLink } from "react-router-dom";

function SeeReviews() {
  const [reviews, setReviews] = useState(ReviewData);

  //  console.log(reviews);
  return (
    
    <div>
      <MyCard>
        <h1>All Reviews!</h1>
      </MyCard>

      {reviews.map((review) => (
        <MyCard>
          <div key={review.id}>
            <h1>{review.name}</h1>
            <p>{review.comment}</p>
          </div>
        </MyCard>
      ))}
    </div>
  );
}

export default SeeReviews;

// const addReviews =(newReviews) =>{
//   newReviews.id = uuidv4()
//   setReviews([newReviews, ...reviews])
// }
{
  /* <NavLink to="/home" activeclassname="active">
      Home
      </NavLink>
      <NavLink to="/about" activeclassname="active">
      About
    </NavLink>  */
}
{
  /* <Link to="/home" ></Link> */
}
