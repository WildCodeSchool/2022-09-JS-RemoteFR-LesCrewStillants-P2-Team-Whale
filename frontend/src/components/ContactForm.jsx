import planet from "@assets/planet.png";

import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="container">
      <form className="form-box">
        <span>
          <h1>Contactez Nous</h1>
          <img className="img-alien" src={planet} alt="Visage_Alien" />
        </span>

        <div>
          <span>Nom*</span>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <span>Email*</span>
          <input type="text" placeholder="example@email.com" />
        </div>
        <div>
          <span>Numéro*</span>
          <input type="text" placeholder="06060606" />
        </div>
        <div>
          <span>Sujet*</span>
          <input type="text" placeholder="Best Quiz thank you" />
        </div>
        <div>
          <span>Message*</span>
          <input type="text" placeholder="Votre message ici" />
        </div>
        <button type="submit" className="buttonSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}
