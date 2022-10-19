import image from "../images/hackthoncontact.png";
import logo from "../images/logomal.png";
import bg from "../images/hackathonbg.jpg";
import ins from "../images/insta.png";
import HackCard from "./HackCard";
import ContactUs from "./ContactUs";
import Footer from "../ux/Footer";
export default function Hackathon() {
  return (
    <div>
      <section className="bg-temp text-red-50">
        <div
          style={{ backgroundImage: "url(" + bg + ")" }}
          className="bg-cover bg-center bg-no-repeat h-screen"
        >
          <div className="p-6">
            <div>
              <div className="flex justify-between items-center">
                <img src={logo} alt="malhaar" />
                <ul className="flex text-2xl text-white gap-3 justify-end relative">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">Register</li>
                  <li className="hover:underline">Contact Us</li>
                </ul>
              </div>
              <img src={ins} alt="" className="absolute right-8 top-21" />
            </div>
            <h1 className="text-7xl uppercase font-semibold p-7">Hackathon</h1>
            <p className="max-w-lg p-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
            <button className="m-7 p-4 rounded-xl bg-blue-400">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex">
          <HackCard title="3-5" sub="Number of members in a team" />
          <HackCard title="24hrs" sub="Duration of Hackathon" />
          <HackCard title="10+" sub="Number of teams participating" />
        </div>
        <section>
          <div className="flex gap-4 justify-center p-36">
            <h1 className="text-7xl font-semibold">
              About <br></br>Hackathon
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
          <div className="flex gap-4 justify-center pt-10 p-36">
            <div>
              <p className="max-w-3xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                augue justo, porttitor vitae felis nec, molestie sodales mi.
                Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis augue justo,
                porttitor vitae felis nec, molestie sodales mi. Suspendisse eget
                aliquam ex, mollis lacinia nunc.
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
            <h1 className="text-7xl font-semibold">
              Problem <br></br>Statement
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-2">
          <div className="p-20">
            <h1 className="text-6xl font-semibold">Participate</h1>
            <p className="max-w-lg p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              augue justo, porttitor vitae felis nec, molestie sodales mi.
              Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis augue justo, porttitor
              vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex,
              mollis lacinia nunc.
            </p>
            <img src={image} alt="laptop" />
          </div>
          <form className="flex flex-col p-20 gap-4">
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="p-2 rounded-sm focus:outline-temp"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                className="p-2 rounded-sm focus:outline-temp"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Team Size</label>
              <input
                type="text"
                className="p-2 rounded-sm focus:outline-temp"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28 mt-4">
              Yes, I'M In
            </button>
          </form>
        </section>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}
