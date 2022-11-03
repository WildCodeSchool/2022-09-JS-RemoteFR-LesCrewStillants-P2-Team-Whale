import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/Quiz.css";

import logo from "@assets/logo.png";
import astronaut from "@assets/lottie-file/astronaut-quiz.json";
import lottieBackground from "@assets/lottie-file/background-quiz.json";

export default function Quiz() {
  return (
    <>
      <Player
        className="lottie-background"
        autoplay
        loop
        src={lottieBackground}
      />
      <section className="quiz">
        <img src={logo} alt="Quiz" className="logo" />
        <div className="quizContainer">
          <Player
            autoplay
            loop
            src={astronaut}
            style={{ height: "300px", width: "300px" }}
          />
          <p>Hello aventurier de l'espace</p>
          <p>Choisissez votre difficultée</p>
          <div className="buttonContainer">
            <button type="submit" className="buttonDifficulty">
              Facile
            </button>
            <button type="button" className="buttonDifficulty">
              Difficile
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
