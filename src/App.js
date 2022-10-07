import "./App.css";
import background from "./images/background.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
