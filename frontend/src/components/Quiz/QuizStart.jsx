import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/Quiz.css";

import astronaut from "@assets/lottie-file/astronaut-quiz.json";

// Create a component for the quiz start
export default function QuizStart() {
  return (
    <>
      {/* <Player> is a component from the lottiefiles library
      i using this 'player' for the picture animation */}
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
    </>
  );
}
