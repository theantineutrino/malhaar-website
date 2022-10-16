import {Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "./Home";
import ContactUs from "./ContactUs";
import Events from "./Events";
import Sponsers from "./Sponsers";
import AboutUs from "./AboutUs";
import Tickets from "./Tickets";

function Page() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/events" element = {<Events />} />
            <Route path="/contact-us" element = {<ContactUs />} />
            <Route path="/sponsers" element = {<Sponsers />} />
            <Route path="/about-us" element = {<AboutUs />} />
            <Route path="/book-tickets" element = {<Tickets />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Page;