import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import AboutPage from "../pages/AboutPage";
import MyCard from "./Shared/MyCard";
// import Contact from "./components/Contact";

function Navbar() {
  return (
    <MyCard>
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
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
          <hr />
        </div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </MyCard>
  );
}

export default Navbar;

{
  /* <li>
  {" "}
  <Link to="/">Home</Link>
</li> */
}
