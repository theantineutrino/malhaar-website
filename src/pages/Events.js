import React, { useState } from "react";

import Header from "../components/Header";
import Dropdown from "../ux/Dropdown";
import bg from "../images/img1.png";
import Footer from "../ux/Footer";

import {
  FolkDance,
  NukkadNatak,
  OpenMic,
  BOB,
  BugDebug,
  Cipher,
  Datathon,
  PhotoQuest,
  SoloSinging,
  TreasureHunt,
} from "../images/events";

function Events() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const data = [
    {
      image: FolkDance,
      date: "November 2022",
      name: "Nrityam",
    },
    {
      image: NukkadNatak,
      date: "November 2022",
      name: "Nukkad Natak",
    },
    {
      image: OpenMic,
      date: "November 2022",
      name: "Khwabeeda",
    },
    {
      image: BOB,
      date: "November 2022",
      name: "Battle of Bands",
    },
    {
      image: BugDebug,
      date: "November 2022",
      name: "Bug Debug",
    },
    {
      image: Cipher,
      date: "November 2022",
      name: "Cipher",
    },
    {
      image: Datathon,
      date: "November 2022",
      name: "Datathon",
    },
    {
      image: PhotoQuest,
      date: "November 2022",
      name: "Photo Quest",
    },
    {
      image: SoloSinging,
      date: "November 2022",
      name: "Solo Singing",
    },
    {
      image: TreasureHunt,
      date: "November 2022",
      name: "Treasure Hunt",
    },
  ];

  return (
    <>
      <section
        className="h-[900px] w-full flex flex-col justify-between relative"
        style={{
          background: `url(${bg}) center center no-repeat`,
        }}
      >
        <div>
          <Header overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
          <Dropdown overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
        </div>
        <span className="w-full h-32 bg-black bg-opacitys-60 blur-md py-10 absolute -bottom-6"></span>
      </section>
      <section className="bg-red-4s00 flex flex-col bg-black justify-end h-full gap-8 pb-20">
        <h1 className="font-open text-8xl text-white font-bold text-center tracking-tighter">
          OUR EVENTS
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
          justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse
          eget aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae
          felis nec, molestie sodales mi. Suspendisse eget aliquam ex, mollis
          lacinia nunc.JAKFNMDSKNLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie
          sodales mi. Suspendisse eget aliquam ex, mollis lacinia
          nunc.JAKFNMDSKNLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Duis augue justo, porttitor vitae felis nec, molestie sodales
          mi. Suspendisse eget aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo,
          porttitor vitae felis nec, molestie sodales mi. Suspendisse eget
          aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis augue justo, porttitor vitae felis
          nec, molestie sodales mi. Suspendisse eget aliquam ex, mollis lacinia
          nunc.JAKFNMDSKNLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Duis augue justo, porttitor vitae felis nec, molestie sodales
          mi. Suspendisse eget aliquam ex, mollis lacinia nunc.JAKFNMDSKNLorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo,
          porttitor vitae felis nec, molestie sodales mi.{" "}
        </p>
        <div className="flex gap-4 gap-y-12 justify-around flex-wrap ">
          {data.map((item) => (
            <div>
              <div className="w-[400px] h-[600px] overflow-hidden">
                <img
                  src={item.image}
                  alt="hackathon"
                  className="w-full h-full hover:scale-110 duration-500 ease-out"
                />
                {/* <div className="group-hover:bg-black h-full w-full group-hover:bg-opacity-30 absolute top-0 left-0 group">
                  <button className="text-white border-2 border-white px-4 py-3 rounded-md hidden group-hover:inline-flex justify-center items-center">
                    Rules
                  </button>
                </div> */}
              </div>
              <div className="flex justify-between bg-red-400s items-center gap-6">
                <div>
                  <p className="text-white">{item.date}</p>
                  <h2 className="text-yellow-400 font-semibold uppercase">
                    {item.name}
                  </h2>
                </div>
                <button className="text-white uppercase rounded-full border border-white bg-transparent px-3">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}

export default Events;
