import image from "../images/hackthoncontact.png";
import logo from "../images/logomal.png";
import bg from "../images/hackathonbg.jpg";
import ins from "../images/insta.png";
import HackCard from "./HackCard";
import ContactUs from "./ContactUs";
import csilogo from "../images/csilogo.png";
import Footer from "../ux/Footer";
import { Link } from "react-router-dom";
// import React from "react";
export default function Hackathon({ overlayOpen, setOverlayOpen }) {
  // const [formData, setFormData] = React.useState({
  //   Name: "",
  //   EmailAddress: "",
  //   TeamSize: "",
  // });
  // const getData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://sheet.best/api/sheets/548bd2d0-d36d-48c9-a8d9-e6181acaf871"
  //     );
  //     const data = formData;
  //     setFormData(data);
  //   } catch (error) {}
  // };
  // React.useEffect(() => {
  //   getData();
  // }, []);
  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }
  return (
    <>
      <section className="bg-temp text-red-50 font-open pb-6">
        <div
          style={{ backgroundImage: "url(" + bg + ")" }}
          className="bg-cover bg-center bg-no-repeat h-screen"
        >
          <div className="py-4 px-6">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={logo} alt="malhaar" className="w-16 md:w-24" />
                  <img src={csilogo} alt="" className="w-16 md:w-24" />
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="z-20 relative w-10 h-10 text-white focus:outline-none ">
                    <button onClick={() => setOverlayOpen(!overlayOpen)}>
                      <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1 top-1/2">
                        <span
                          className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                            overlayOpen
                              ? "rotate-45 delay-200"
                              : "-translate-y-1.5"
                          }`}
                        ></span>
                        <span
                          className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                            overlayOpen
                              ? "w-0 opacity-50"
                              : "w-8 delay-200 opacity-100"
                          }`}
                        ></span>
                        <span
                          className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                            overlayOpen
                              ? "-rotate-45 delay-200"
                              : "translate-y-1.5"
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
              </div>
            </div>
            <h1 className="pt-16 text-center md:text-left text-4xl md:text-7xl uppercase font-semibold p-7 tracking-tighter">
              Hackathon
            </h1>
            <p className="max-w-lg p-7 text-lg text-center md:text-left">
              Malhaar'22 in collaboration with CSI brings to you a 24hr
              Hackathon exclusively sponsored by Cvent <br /> Date: November 23,
              2022 <br /> Time: 10:00 a.m. onwards
              <br /> No. Of team members: 4 <br /> Participation fee: FREE
              <br />
            </p>
            <button className="w-full md:w-max text-lg md:m-7 py-2 px-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center w-full md:flex-row">
          <HackCard title="4" sub="Number of members in a team" />
          <HackCard title="24hrs" sub="Duration of Hackathon" />
          <HackCard title="50+" sub="Number of teams participating" />
        </div>
        <section className="mt-10">
          <div className="flex px-10 flex-col md:flex-row items-center gap-4 justify-center">
            <h1 className="w-full md:w-1/3 text-2xl md:text-7xl font-semibold">
              About Hackathon
            </h1>
            <p className="max-w-3xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
          </div>
          <div className="flex px-10 flex-col md:flex-row items-center gap-4 justify-center mt-10 md:mt-32">
            <h1 className="w-full md:w-1/3 text-2xl md:text-7xl font-semibold">
              Problem Statement
            </h1>
            <div>
              <p className="max-w-3xl ">
                Teams will be provided with a problem statement to rack their
                brains on. WINNERS will be awarded a handsome amount of
                1,00,000/- to compliment their efforts and hardwork! REGISTER
                NOW and get your contemplating minds aboard this
                avant garde quest!
              </p>
              <p className="max-w-3xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                augue justo, porttitor vitae felis nec, molestie sodales mi.
                Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis augue justo,
                porttitor vitae felis nec, molestie sodales mi. Suspendisse eget
                aliquam ex, mollis lacinia nunc.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row px-10 md:px-32 mt-10 md:mt-32 items-center">
          <div className="">
            <h1 className="text-2xl md:text-7xl font-semibold">Participate</h1>
            <p className="max-w-lg pt-10 md:p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
            <img src={image} alt="laptop" className="hidden md:block" />
          </div>
          <form className="flex flex-col w-full gap-4 mt-6 md:mt-0">
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Team Name
              </label>
              <input
                placeholder="Enter your Team Name"
                type="text"
                // onChange={handleChange}
                name="Name"
                // value={formData.Name}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Email Address
              </label>
              <input
                type="text"
                // onChange={handleChange}
                name="email"
                // value={formData.EmailAddress}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-light text-lg font-open pb-1">
                Team Size
              </label>
              <input
                type="text"
                // onChange={handleChange}
                // value={formData.TeamSize}
                className="p-2 rounded-sm focus:outline-temp text-black"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4 ">
              Yes, I'm In
            </button>
          </form>
        </section>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
}
