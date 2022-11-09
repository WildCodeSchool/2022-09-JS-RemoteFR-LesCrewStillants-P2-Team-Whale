import { Player } from "@lottiefiles/react-lottie-player";

import Navbar from "@components/Navbar";
import QuizScore from "@components/Quiz/QuizQuestion";

import "@assets/css/Quiz.css";

import logo from "@assets/logo.png";
import lottieBackground from "@assets/lottie-file/background-quiz.json";

// Create a component for the quiz page
export default function Quiz() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <Player> is a component from the lottiefiles library 
      i using this 'player' for the background animation */}
      <Player
        className="lottie-background"
        autoplay
        loop
        src={lottieBackground}
      />
      {/* Create a section for quiz */}
      <section className="quiz">
        {/* Create logo */}
        <img src={logo} alt="Quiz" className="logo" />
        {/* Container for the quiz component */}
        <div className="quizContainer">
          <QuizScore />
        </div>
      </section>
    </>
  );
}
