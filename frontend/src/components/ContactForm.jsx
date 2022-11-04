import planet from "@assets/planet.png";

import "./contactForm.css";

export default function ContactForm() {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form className="form-box">
            <h1>
              <span>
                Contacter Nous
                <img className="img-alien" src={planet} alt="Visage_Alien" />
              </span>
            </h1>
            <div>
              <span>Nom *</span>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <span>Email *</span>
              <input type="text" placeholder="example@email.com" />
            </div>
            <div>
              <span>Numéro</span>
              <input type="text" placeholder="06060606" />
            </div>
            <div>
              <span>Sujet*</span>
              <input type="text" placeholder="Meilleur Quizz" />
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
      </div>
    </div>
  );
}
