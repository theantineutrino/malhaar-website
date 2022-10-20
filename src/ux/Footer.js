import logo from "../images/logo.png";
import ins from "../images/insta.png";
import "../App.css";
export default function Footer() {
  return (
    <div className="bg-black md:flex ">
      <img
        src={logo}
        alt=""
        className="m-auto w-1/3 md:w-1/4 md:h-1/4 items-center"
      />
      <div className="text-white ">
        <p className="md:w-1/2 p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
          justo, porttitorvitae felis nec, molestie sodales mi. Suspendisse eget
          aliquam ex, mollis lacinia nunc.
        </p>

        <div className="w-full ">
          <ul className="items-center flex flex-col gap-2 justify-center font-normal md:flex md:flex-row md:gap-5 md:justify-end p-9 text-xl md:font-semibold">
            <li>
              <a href="/hackathon">HACKATHON</a>{" "}
            </li>
            <li>EVENTS</li>
            <li>TICKETS</li>
            <li>SPONSORS</li>
            <li>CONTACT US</li>
            <img src={ins} alt="instagram" />
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}
