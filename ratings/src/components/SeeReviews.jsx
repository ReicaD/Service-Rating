import React, { useState } from "react";
import MyCard from "./Shared/MyCard";
import ReviewData from "../Data/ReviewData";
//  import { v4 as uuidv4 } from "uuid";
// import { Link, NavLink } from "react-router-dom";

function SeeReviews() {
  const [reviews, setReviews] = useState(ReviewData)
  
  return (
    <div>
      <MyCard>
        <div>
         
          <h1>SeeReviews</h1>
        </div>
          {/* <NavLink to="/home" activeclassname="active">
          Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
          About
        </NavLink>  */}
        {/* <Link to="/home" ></Link> */}
      </MyCard>
    </div>
  );
}
console.log("ReviewData");

export default SeeReviews;

// const addReviews =(newReviews) =>{
//   newReviews.id = uuidv4()
//   setReviews([newReviews, ...reviews])
// }