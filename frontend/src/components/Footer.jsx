import "./Footer.css";
import planete from "@assets/Planets.svg";
import facebook from "@assets/Facebook.svg";
import insta from "@assets/Instagramme.svg";
import twitter from "@assets/Twitter.svg";
import QR from "@assets/LogoQR.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="Imageplanets" src={planete} alt="Image_Planetes" />

      <div className="bas">
        <div className="reseaux">
          <h5 className="titleR">Follow Us </h5>
          <img className="img" src={insta} alt="Logo_Instagramme" />
          <img className="img" src={facebook} alt="Logo_FaceBook" />
          <img className="img" src={twitter} alt="Logo_Twitter" />
        </div>

        <img className="QV" src={QR} alt="Logo_QV" />

        <div className="contactUs">
          <a className="liens" href="Home.jsx">
            Contact Us{" "}
          </a>
          <p className="Mention"> Mentions légales</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
