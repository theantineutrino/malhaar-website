import "../App.css";
import mail from "../images/envel.png";
import phone from "../images/phone.png";
import loc from "../images/loc.png";
import bg from "../images/contactbg.png";
export default function ContactUs() {
  return (
    <div>
      <div className="md:flex " style={{ backgroundImage: "url(" + bg + ")" }}>
        <div className="p-4 items-center w-full md:w-1/2 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold">CONTACT US</h1>
          <p className="p-3 max-w-xl md:p-8">
            You can contact us in the following ways
          </p>
          <div className="p-2 max-w-lg md:pl-12 flex md:p-3 pt-0 gap-5">
            <img src={mail} alt="" className="max-h-5" />{" "}
            malhaar@bpitindia.edu.in
          </div>
          <div className="p-2 flex md:p-3 md:pl-12  pt-0 gap-5">
            <img src={phone} alt="" className="max-h-5" />{" "}
            malhaar@bpitindia.edu.in
          </div>
          <div className="p-2 flex max-w-md md:pl-12  md:p-3 pt-0 gap-5">
            <img src={loc} alt="" className="max-h-5" />
            <p>
              Bhagwan Parashuram Institute of Technology · Address Sector-17,
              Rohini, PSP-4, New Delhi, Delhi 110085
            </p>
          </div>
        </div>
        <div className="pt-3 pb-3 p-9 w-96 m-auto md:m-32 md:w-1/2 md:pl-9 md:pt-10 md:pb-10 items-center bg-cont drop-shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold p-4">
            Say Something..!!
          </h1>
          <form action="" className="flex flex-col gap-1 md:gap-3">
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
