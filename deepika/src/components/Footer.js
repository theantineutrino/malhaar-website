import logo from "../assests/logo 4.png";
// import ins from "../images/insta.png";
import "../App.css";
export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer--logo" width="270vw" />
      <div className="footer--text">
        Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. Duis
        augue justo, porttitor <br></br>vitae felis nec, molestie sodales mi.
        Suspendisse eget aliquam ex,<br></br> mollis lacinia nunc.
        {/* <img src={ins} alt="" className="footer--instagram" /> */}
        <div className="footer--menu">
          <ul>
            <li>ABOUT US</li>
            <li>EVENTS</li>
            <li>TICKETS</li>
            <li>SPONSORS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}