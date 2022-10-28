import { Player } from "@lottiefiles/react-lottie-player";

import logo from "@assets/logo.png";
import lotti from "@assets/lotti.json";

import "@assets/css/Quiz.css";

export default function Quiz() {
  return (
    <section className="quiz">
      <img src={logo} alt="Quiz" className="logo" />
      <div className="quizContainer">
        <Player
          autoplay
          loop
          src={lotti}
          style={{ height: "300px", width: "300px" }}
        />
        <p>Hello aventurier de l'espace</p>
        <p>Choisissez votre difficultée</p>
        <div className="buttonContainer">
          <button type="submit" className="buttonDifficulty">
            Facile
          </button>
          <button type="submit" className="buttonDifficulty">
            Difficile
          </button>
        </div>
      </div>
    </section>
  );
}