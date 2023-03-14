import React from "react";
import { Link,Routes,Route } from "react-router-dom";
import MyCard from "../components/Shared/MyCard";
import Post from "../components/Post";
// import AboutIconLink from "../components/AboutIconLink";
function AboutPage() {
  return (
    <MyCard>
      <div className="about">
        <h1>About Rankify</h1>
        <p>This is Rankify app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>

        <Link to="/see_reviews">
          {" "}
          <h2>See All Rankers!</h2>
        </Link>

      </div>
        <Route path="/post/:id/:name/:comment" element={<Post />} /> 
      {/* <NavLink to="/home" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>  */}
    </MyCard>
  );
}

export default AboutPage;
