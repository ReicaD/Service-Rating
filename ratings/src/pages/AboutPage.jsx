import React from "react";
import { Link, NavLink } from "react-router-dom";
import MyCard from "../components/Shared/MyCard";
//import AboutIconLink from "../components/AboutIconLink";
function AboutPage() {
  return (
    <MyCard>
      <div className="about">
        <h1>About Rankify</h1>
        <p>This is Rankify app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to="/home">Back to Home!</Link>
        </p>
      </div>
      <NavLink to="/home" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </MyCard>
  );
}

export default AboutPage;
