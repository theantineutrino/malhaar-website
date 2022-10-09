import "../App.css";
import Footer from "./Footer";
import mail from "../images/envel.png";
import phone from "../images/phone.png";
import loc from "../images/loc.png";
export default function ContactUs() {
  return (
    <div>
      <div>
        <h1>CONTACT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
          <br></br>
          justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse
          eget <br />
          aliquam ex, mollis lacinia nunc. <br />
        </p>
        <div className="contact--sus">
          <img src={mail} alt="" width="15px" /> malhaar@bpitindia.edu.in
        </div>
        <div className="contact--sus">
          <img src={phone} alt="" width="15px" /> malhaar@bpitindia.edu.in
        </div>
        <div className="contact--sus">
          <img src={loc} alt="" width="15px" /> malhaar@bpitindia.edu.in
        </div>
      </div>
      <Footer />
    </div>
  );
}
