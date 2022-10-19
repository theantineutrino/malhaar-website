import "../App.css";
import mail from "../images/envel.png";
import phone from "../images/phone.png";
import loc from "../images/loc.png";
import bg from "../images/contactbg.png";
export default function ContactUs() {
  return (
    <div>
      <div className="flex p-36" style={{ backgroundImage: "url(" + bg + ")" }}>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">CONTACT US</h1>
          <p className="max-w-xl p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
            justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse
            eget aliquam ex, mollis lacinia nunc.
          </p>
          <div className="flex p-8 pt-0 gap-5">
            <img src={mail} alt="" /> malhaar@bpitindia.edu.in
          </div>
          <div className="flex p-8 pt-0 gap-5">
            <img src={phone} alt="" /> malhaar@bpitindia.edu.in
          </div>
          <div className="flex p-8 pt-0 gap-5">
            <img src={loc} alt="" />
            Bhagwan Parashuram Institute of Technology · Address Sector-17,
            Rohini, PSP-4, New Delhi, Delhi 110085
          </div>
        </div>
        <div className="w-1/2 pl-9 pt-10 pb-10 items-center bg-cont h-max drop-shadow-2xl">
          <h1 className="text-5xl font-bold p-4">Say Something..!!</h1>
          <form action="" className="flex flex-col gap-3">
            <label htmlFor=""></label>
            <input type="text" className="p-2 rounded-sm max-w-lg" />

            <input type="text" className="p-2 rounded-sm max-w-lg" />

            <input type="text" className="p-2 rounded-sm max-w-lg h-60" />

            <button className="max-w-lg bg-red-600 p-2 rounded-md mb-5 text-white text-lg font-semibold">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
