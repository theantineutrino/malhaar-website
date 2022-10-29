import "../App.css";

// import background from "../images/background.png";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Card from "../components/Card";
import ContactUs from "../components/ContactUs";
import ImageCarousal from "../components/ImageCarousal";
import Footer from "../ux/Footer";
import Dropdown from "../ux/Dropdown";
import { useState } from "react";

function Home() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <div className="App">
      <div className="w-full min-h-screen bg-black">
        <div>
          <Header overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
          <Dropdown overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
        </div>
        <Hero />
        <ImageCarousal />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
