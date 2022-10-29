import { Link } from "react-router-dom";

export default function Dropdown({ overlayOpen, setOverlayOpen }) {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-700 ${
        overlayOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center justify-center bgs-red-400">
        <li className="nav-li">
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            About
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/events"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Events
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/hackathon"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Hackathon
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/book-tickets"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Book Your Ticket
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/sponsers"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Our Sponsors
          </Link>
        </li>
        <li className="nav-li">
          <Link
            to="/contact-us"
            className="nav-link"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
