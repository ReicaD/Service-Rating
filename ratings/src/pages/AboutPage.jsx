import React from "react";
import { Link } from "react-router-dom";
import MyCard from "../components/Shared/MyCard";

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
    </MyCard>
  );
}

export default AboutPage;
