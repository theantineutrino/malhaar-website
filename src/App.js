import logo from './logo.svg';
import './App.css';

function App() {
  function hide(){
    document.getElementById("drop").style.display = "none";
      document.getElementById("drop").style.animationName = "none";
  }
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <div
        className="App--page1"
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Header />
        <div className="App--hero">
          <Hero />
        </div>
        <div id="drop">
          <button style={{position:"absolute", 
                          right:"100px", 
                          top:"20px", 
                          width:"30px", 
                          height:"30px",
                          fontSize:"30px",
                          color:"white",
                          backgroundColor:"black"}}onClick={hide}><b>X</b></button>
            ABOUT<br/>
            HOME<br/>
            CONTACT US<br/>
        </div>
      </div>
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
