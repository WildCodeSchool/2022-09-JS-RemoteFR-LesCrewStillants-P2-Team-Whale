import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/QuizScore.css";

import book from "@assets/lottie-file/book.json";

// Create a component for the quiz score
export default function QuizScore() {
  return (
    <>
      {/* <Player> is a component from the lottiefiles library
      i using this 'player' for the picture animation */}
      <Player
        autoplay
        loop
        src={book} // <- or not book
        style={{ height: "150px", width: "150px" }}
      />
      <p className="score">Your score</p>
      <p className="score">0 / 10</p>
      <p>Almost there !</p>
      <input className="inputName" type="text" placeholder="Your name" />
      <div className="buttonScoreContainer">
        <button type="submit" className="buttonSubmit">
          Submit
        </button>
        <button type="submit" className="buttonScore">
          Accueil
        </button>
      </div>
    </>
  );
}
