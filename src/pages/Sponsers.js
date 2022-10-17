import React from "react";
import Sponsors from "../components/Sponsorele";
import SpHeader from "../components/SpHeader";
import Footer from "../components/Footer";
import "../App.css";
function Sponsers() {
  return (
    <div className="sponsor--page">
      <SpHeader />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Sponsers;
