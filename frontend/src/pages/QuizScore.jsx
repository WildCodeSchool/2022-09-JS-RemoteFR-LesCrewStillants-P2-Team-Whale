import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "@components/Navbar";
import "@assets/css/Quiz.css";
import "@assets/css/QuizScore.css";
import book from "@assets/lottie-file/book.json";

export default function QuizScore() {
  return (
    <>
      <Navbar />
      {/* <Player> is a component from the lottiefiles library 
      i using this 'player' for the background animation */}
      <Player
        autoplay
        loop
        src={book} // <- or not book
        style={{ height: "150px", width: "150px" }}
      />
      <section className="quiz">
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
      </section>
    </>
  );
}
