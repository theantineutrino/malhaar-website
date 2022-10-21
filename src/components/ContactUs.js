import "../App.css";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import mail from "../images/envel.png";
import phone from "../images/phone.png";
import loc from "../images/loc.png";
import bg from "../images/contactbg.png";

export default function ContactUs() {
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby5tbqqzgeQMK-uCjwGns5Sg2TQmudr3OKih3-vZ462_-FbEnQ0r8WLemI-XPNA1nil/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(loading);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        toast.success(
          "We've received your query and will contact you shortly",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 md:gap-3"
          >
            <label htmlFor=""></label>
            <input
              name="Name"
              type="text"
              className="p-2 rounded-sm max-w-lg"
              placeholder="Your Name..."
            />

            <input
              type="text"
              name="Email"
              className="p-2 rounded-sm max-w-lg"
              placeholder="Your Mail..."
            />

            <textarea
              type="text"
              name="Message"
              className="p-2 rounded-sm max-w-lg h-60"
              placeholder="Message..."
            />
            <button
              type="submit"
              className="max-w-lg bg-red-500 hover:bg-red-700 transition-all duration-300 ease-out drop-shadow-md p-2 rounded-md mb-5 text-white text-lg font-semibold"
            >
              {loading ? "Loading..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={5000} />
    </div>
  );
}
