import "./footer.css";
import imageplanete from "@assets/imageplanete.svg";
import facebook from "@assets/Facebook.svg";
import insta from "@assets/instagrame.svg";
import QR from "@assets/LogoQR.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="haut">
        <div className="description">
          <p>
            QUIZ VERSE :<br />
            Une application sur l'espace pour un but ludique.
            <br />
            <br />
            <br />
            DEVELOPPE PAR :<br />
            <br />
            Victoire
            <br />
            Mathieu
            <br />
            Sébastien
            <br />
            Valentin
            <br />
            Yohan
          </p>
        </div>

        <img className="image" src={imageplanete} alt="ImagePlanete" />
      </div>

      <div className="bas">
        <img className="fb" alt="facebook" src={facebook} />
        <img className="QV" alt="logo QuizVerse" src={QR} />
        <img className="instagram" alt="Logo Instagrame" src={insta} />
      </div>
    </div>
  );
}

export default Footer;
