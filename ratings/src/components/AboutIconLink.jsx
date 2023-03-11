import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import Navbar from "./Navbar";

function AboutIconLink() {
  return (
    <div className="about-link">
      <h2>
        {/* <Link to={{ pathname: "/about", search: "?sort=name", hash: "#hello" }}>
          </Link> */}
        <a href="/about">
          <FaQuestion size={30} />
        </a>
      </h2>
    </div>
  );
}

export default AboutIconLink;

