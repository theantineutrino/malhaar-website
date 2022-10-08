import "../App.css";
import hero from "../images/Group.png";
import crowd1 from "../images/crowd1.png";
import text from "../images/Malhaar22.png";
export default function Hero() {
  return (
    <div className="hero--img">
      <div className="hero--img1">
        <img src={hero} alt="" width="450px" />
      </div>
      <div className="hero--crowd1">
        <img src={crowd1} alt="" width="100%" />
      </div>
      <div className="hero--text">
        <img src={text} alt="" width="500px" />
      </div>
    </div>
  );
}
