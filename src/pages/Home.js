import "../App.css";

import background from "../images/background.png";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    // <div className="App">
    //   <div
    //     className="App--page1"
    //     style={{
    //       backgroundImage: "url(" + background + ")",
    //       backgroundSize: "cover",
    //       height: "195vh",
    //     }}
    //   >
    //     <Header />
    //     <div className="App--hero">
    //       <Hero />
    //     </div>
    //     <Dropdown />
    //   </div>
    //   <div className="App--page2">
    //     <Card title="25+" content="hello this is a mic test lmao lmao" />
    //     <Card title="25+" content="hello this is a mic test lmao lmao" />
    //     <Card title="25+" content="hello this is a mic test lmao lmao" />
    //     <Card title="25+" content="hello this is a mic test lmao lmao" />
    //   </div>
    //   <ContactUs />
    // </div>
    <div className="App">

      <div className="App--page1">
        <Header />
        <Hero />
      </div>

    </div>
  );
}

export default Home;