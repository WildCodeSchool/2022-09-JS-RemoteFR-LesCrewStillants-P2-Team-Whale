import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "@components/Navbar";
import "@assets/css/Quiz.css";
import "@assets/css/QuizScore.css";
import book from "@assets/lottie-file/book.json";
import lottieBackground from "@assets/lottie-file/background-quiz.json";
import logo from "@assets/logo.png";

export default function QuizScore() {
  return (
    <>
      <Navbar />
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
        </div>
      </section>
    </>
  );
}
