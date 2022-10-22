// import img2 from "../images/img2.png";
// import bg from "../images/bg.png";
import pepsi from "../images/pepsi.png";
import coke from "../images/coke.png";
import bisleri from "../images/bisleri.png";
import microsoft from "../images/microsoft.png";
import goldman from "../images/goldman.png";
// import classes from "./Sponsors.module.css";
import img1 from "../images/img1.png";
import logo1 from "../images/logo.png";
import Splogo from "./Sponsorlogo";
import more from "../images/more.png";
import ins from "../images/insta.png";

const Sponsors = () => {
  return (
    <div className="bg-black">
      <div
        style={{ backgroundImage: "url(" + img1 + ")" }}
        className="flex flex-col bg-cover bg-center bg-no-repeat h-screen justify-between"
      >
        <nav className="m-5 flex justify-between ">
          <img src={logo1} alt="" className="w-10 flex h-10 md:w-16 md:h-16" />
          <div className="flex flex-col justify-center gap-2">
            <img src={more} alt="" className="flex h-5 md:w-8 md:h-8" />
            <img src={ins} alt="" className="w-5 flex md:w-8 md:h-8" />
          </div>
        </nav>
        <div className="">
          <h1 className="text-white font-sans text-4xl font-semibold flex justify-center md:text-7xl">
            Our Supporters
          </h1>
          <h2 className="text-yellow-400 font-semibold text-xl uppercase flex justify-center md:text-4xl">
            Sponsors and partners
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-evenly p-5 gap-4 md:gap-7 md:p-10">
        <section className="flex flex-col gap-4 md:gap-7">
          <h1 className="text-white font-sans text-2xl font-semibold md:text-4xl items flex justify-center">
            Presented by:
          </h1>
          <div className="flex items-center gap-3 md:gap-16 justify-center">
            <Splogo vale="1" img={pepsi} title="Pepsi" />
            <Splogo vale="1" img={goldman} title="Goldman Sach" />
          </div>
        </section>
        <section className="flex flex-col gap-4 md:gap-7 ">
          <h1 className="text-white font-sans text-2xl font-semibold md:text-4xl flex justify-center">
            Co-Presented by:
          </h1>
          <div className="flex items-center gap-3 md:gap-16 justify-center ">
            <Splogo vale="2" img={coke} title="Coke" />
            <Splogo vale="2" img={bisleri} title="Bisleri" />
          </div>
        </section>
        <section className="flex flex-col gap-4 md:gap-7">
          <h1 className="text-white font-sans text-2xl font-semibold md:text-4xl flex justify-center">
            Powered By:
          </h1>
          <div className="flex items-center gap-3 md:gap-16 justify-center">
            <Splogo vale="3" img={microsoft} title="Microsoft" />
            <Splogo vale="3" img={goldman} title="Goldman" />
          </div>
        </section>
        <section className="flex flex-col gap-4 md:gap-7">
          <h1 className="text-white font-sans text-2xl font-semibold md:text-4xl flex justify-center">
            Publicity Sponsors:
          </h1>
          <div className="flex items-center gap-3 md:gap-16 justify-center">
            <Splogo vale="3" img={pepsi} title="Pepsi" />
            <Splogo vale="3" img={goldman} title="Goldman" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
