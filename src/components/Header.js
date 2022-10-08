import "../App.css";
import menu from "../images/more.png";
import logo from "../images/logomal.png";
import ins from "../images/insta.png";
export default function Header() {

  function display(){
    let a=1;
    if(a%2===1){
      document.getElementById("drop").style.display = "block";
      document.getElementById("drop").style.animationName = "dropp";
    }
  }
  
  return (
    <div className="header--container">
      <div className="header--logo">
        <img src={logo} alt="Malhaar" height="80px" />
      </div>
      <div className="header--menu">
        <div className="header--element">
          <button style={{backgroundColor:"black"}} onClick={display}><img src={menu} alt="" height="24px" /></button>
        </div>
        <div className="header--element">
          <img src={ins} alt="" />
        </div>
      </div>
    </div>
  );
}
