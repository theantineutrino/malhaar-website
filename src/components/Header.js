import "../App.css";
import menu from "../images/more.png";
import logo from "../images/logomal.png";
import ins from "../images/insta.png";
export default function Header() {
  return (
    <div className="header--container">
      <div className="header--logo">
        <img src={logo} alt="Malhaar" height="80px" />
      </div>
      <div className="header--menu">
        <div className="header--element">
          <img src={menu} alt="" height="24px" />
        </div>
        <div className="header--element">
          <img src={ins} alt="" />
        </div>
      </div>
    </div>
  );
}
