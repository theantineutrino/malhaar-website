import "../App.css";
import "react-dom";
import ContactU from "./ContactUs";
import About from "./About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function hide() {
  document.getElementById("drop").style.display = "none";
  document.getElementById("drop").style.animationName = "none";
}
export default function Dropdown() {
  return (
    <div id="drop">
      <button
        style={{
          position: "absolute",
          right: "60px",
          top: "30px",
          width: "30px",
          height: "30px",
          fontSize: "30px",
          color: "white",
          border: "none",
          backgroundColor: "black",
        }}
        onClick={hide}
      >
        <b>X</b>
      </button>
      <br />
      <br />
      <br />
      <br />
      <Router>
        <div className="hero--text--dropdown" id="hero--text">
          <Link to="/About">ABOUT</Link>
          <br />
          <Link to="/">HOME</Link>
          <br />
          <Link to="/Contact">CONTACT US</Link>
          <br />
        </div>
        <Routes>
          {/* <Route exact path="/" element={<App />}></Route> */}
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<ContactU />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
