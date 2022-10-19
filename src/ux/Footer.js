import logo from "../images/logo.png";
import ins from "../images/insta.png";
import "../App.css";
export default function Footer() {
  return (
    <div className="flex bg-black">
      <img src={logo} alt="" className="w-1/4 h-1/4 items-center" />
      <div className="text-white ">
        <p className="w-1/2 p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
          justo, porttitorvitae felis nec, molestie sodales mi. Suspendisse eget
          aliquam ex, mollis lacinia nunc.
        </p>

        <div className="w-full ">
          <ul className=" flex gap-5 justify-end p-9 text-xl font-semibold">
            <li>HACKATHON</li>
            <li>EVENTS</li>
            <li>TICKETS</li>
            <li>SPONSORS</li>
            <li>CONTACT US</li>
            <img src={ins} alt="" />
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}
