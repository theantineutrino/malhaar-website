import "./App.css";
import background from "./images/background.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  function hide(){
    document.getElementById("drop").style.display = "none";
      document.getElementById("drop").style.animationName = "none";
  }
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
        <div id="drop">
          <button style={{position:"absolute", 
                          right:"60px", 
                          top:"30px", 
                          width:"30px", 
                          height:"30px",
                          fontSize:"30px",
                          color:"white",
                          backgroundColor:"black"}}onClick={hide}><b>X</b></button>
            <br/><br/><br/><br/>
            ABOUT<br/>
            HOME<br/>
            CONTACT US<br/>
        </div>
      </div>
      <div className="App--page2">
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
        <Card title="25+" content="hello this is a mic test lmao lmao" />
      </div>
    </div>
  );
}

export default App;
