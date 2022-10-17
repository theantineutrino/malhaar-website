import "../App.css";

import hero from "../images/Group.png";
import crowd1 from "../images/crowd1.png";
import crowd2 from "../images/crowd2.png";
import crowd3 from "../images/crowd3.png";

import text from "../images/Malhaar22.png";
export default function Hero() {
  return (
    <div className="hero--img">
      <div className="hero--text">
        <img src={text} alt="" width="100%" height="auto" />
      </div>
      <div className="hero--img1">
        <img src={hero} alt="" width="100%" height="auto" />
      </div>

      <div className="hero--crowds">
        <div className="hero--crowd1">
          <img src={crowd1} alt="" width="100%" height="auto" />
        </div>
        <div className="hero--crowd2">
          <img src={crowd2} alt="" width="100%" height="auto" />
        </div>
        <div className="hero--crowd3">
          <img src={crowd3} alt="" width="100%" height="auto" />
        </div>
      </div>

    </div>
  );
}
