import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import SeeReviews from "./SeeReviews";
// import MyCard from "./Shared/MyCard";
// import Contact from "./components/Contact";

function Navbar() {
  return (
    // <MyCard>
    <Router>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link to="/about">
              <button
                className="btn btn-outline-danger"
                type="submit"
                style={{ background: "#D68910", color: "black" }}
              >
                <h2>About</h2>
              </button>
            </Link>
            {/* <li>
              <Link to="/see_reviews">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  style={{ background: "#D68910", color: "black" }}
                >
                  <h2>Rankers</h2>
                </button>
              </Link>
            </li> */}
          </li>
          <li>
            <Link to="/home">
              <button
                className="btn btn-outline-danger"
                type="submit"
                style={{ background: "#D68910", color: "black" }}
              >
                <h2>Home</h2>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/see_reviews" element={<SeeReviews />} />
      </Routes>
    </Router>

    // </MyCard>
  );
}

export default Navbar;
