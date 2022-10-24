import logo from "../images/logo.png";
import ins from "../images/insta.png";
import "../App.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-black md:flex ">
      <div className="m-auto w-1/3 md:w-1/4">
        <Link to="/">
          <img src={logo} alt="malhaar-logo" />
        </Link>
      </div>
      <div className="text-white">
        <p className="md:w-1/2 p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
          justo, porttitorvitae felis nec, molestie sodales mi. Suspendisse eget
          aliquam ex, mollis lacinia nunc.
        </p>
        <div className="w-full ">
          <ul className="items-center flex flex-col gap-2 justify-center font-normal md:flex md:flex-row md:gap-5 md:justify-end p-9 text-xl md:font-semibold">
            <li>
              <Link to="/hackathon">HACKATHON</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/book-tickets">TICKETS</Link>
            </li>
            <li>
              <Link to="/sponsers">SPONSORS</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT</Link>
            </li>
            <a
              href="https://www.instagram.com/malhaarbpit/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ins} alt="instagram" />
            </a>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}
