import "../App.css";
import "react-dom";
import ContactU from "../components/ContactUs";
import About from "../components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function hide() {
  document.getElementById("drop").style.display = "none";
  document.getElementById("drop").style.animationName = "none";
}
export default function Dropdown() {
  return <div id="drop">dropdown</div>;
}
