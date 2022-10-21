import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import ContactUs from "./ContactUsPage";
import Events from "./Events";
import Sponsers from "./Sponsers";
import HackathonPage from "./HackathonPage";
import Tickets from "./Tickets";

import ScrollTop from "../utils/ScrollTop";

function Page() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sponsers" element={<Sponsers />} />
        <Route path="/hackathon" element={<HackathonPage />} />
        <Route path="/book-tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Page;
