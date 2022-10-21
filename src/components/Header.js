import logo from "../images/logomal.png";
import ins from "../images/insta.png";

export default function Header({ overlayOpen, setOverlayOpen }) {
  return (
    <section className="flex justify-between items-start px-3">
      <div className="">
        <img src={logo} alt="Malhaar" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="z-20 relative w-10 h-10 text-white focus:outline-none ">
          <button onClick={() => setOverlayOpen(!overlayOpen)}>
            <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1 top-1/2">
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                  overlayOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                  overlayOpen ? "w-0 opacity-50" : "w-8 delay-200 opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                  overlayOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div className="">
          <a
            target="_blank"
            href="https://www.instagram.com/malhaarbpit/?hl=en"
            rel="noreferrer"
          >
            <img src={ins} alt="instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}
