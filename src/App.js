<<<<<<< HEAD
import "./App.css";
import background from "./images/background.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Dropdown from "./ux/Dropdown";
import ContactUs from "./components/ContactUs";
import ImageCarousal from "./components/ImageCarousal/ImageCarousal";
function App() {
  return (
    <div className="App">
      <div
        className="App--page1"
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          height: "195vh",
        }}
      >
        <Header />
        <div className="App--hero">
          <Hero />
        </div>
        <Dropdown />
      </div>
      <div className="App--page2">
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
      </div>
      <ImageCarousal></ImageCarousal>

      <ContactUs />
    </div>
=======


import Page from "./pages/Page";
function App() {
  return (
    <Page />
>>>>>>> 2ecc4fe2d7c6d8821ef93f8837e8bb24ff29a330
  );
}
export default App;

