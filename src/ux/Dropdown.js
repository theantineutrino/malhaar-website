import "../App.css";
import "react-dom";
function hide() {
  document.getElementById("drop").style.display = "none";
  document.getElementById("drop").style.animationName = "none";
}
export default function Dropdown() {
  return <div id="drop">dropdown</div>;
}
