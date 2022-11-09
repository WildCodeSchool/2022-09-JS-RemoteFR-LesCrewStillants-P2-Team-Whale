import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/QuizQuestion.css";

import astronaut from "@assets/lottie-file/astronaut-quiz.json";

// Create a component for the quiz question
export default function QuizQuestion() {
  return (
    <>
      {/* <Player> is a component from the lottiefiles library
      i using this 'player' for the picture animation */}
      <Player
        autoplay
        loop
        src={astronaut}
        style={{ height: "150px", width: "150px" }}
      />
      <p>Quel est la couleur blanche du cheval blanc d'Henri IV ?</p>
      <div className="buttonAnswerContainer">
        <button type="submit" className="answerButton">
          Rouge
        </button>
        <button type="button" className="answerButton">
          Blanc
        </button>
        <button type="button" className="answerButton">
          Bleu
        </button>
        <button type="button" className="answerButton">
          Jaune
        </button>
      </div>
      <div className="buttonResetContainer">
        <button type="button" className="resetButton">
          Reset
        </button>
      </div>
    </>
  );
}
