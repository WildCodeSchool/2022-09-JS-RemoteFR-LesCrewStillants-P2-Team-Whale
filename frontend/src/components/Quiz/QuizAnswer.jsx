import { Player } from "@lottiefiles/react-lottie-player";
import "@assets/css/QuizAnswer.css";
import incorrectAnswer from "@assets/lottie-file/incorrect-answer.json";
// import correctAnswer from "@assets/lottie-file/correct-answer.json";

export default function QuizAnswer() {
  return (
    <>
      {/* <Player> is a component from the lottiefiles library
      i using this 'player' for the picture animation */}
      <Player
        autoplay
        loop
        src={incorrectAnswer} // <- or correct or not correct
        style={{ height: "150px", width: "150px" }}
      />
      <p className="answer">Quel est le nom de la planéte rouge ?</p>
      <p>Votre réponse:</p>
      <p className="answer">Jupiter</p>
      <p>La bonne réponse est:</p>
      <p className="answer">Mars</p>
      <div className="buttonNextContainer">
        <button type="submit" className="buttonNext">
          Next
        </button>
      </div>
    </>
  );
}
