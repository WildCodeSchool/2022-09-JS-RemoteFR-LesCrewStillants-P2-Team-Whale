import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/QuizQuestion.css";

import astronaut from "@assets/lottie-file/astronaut-quiz.json";

import { useState, useEffect } from "react";

import questionService from "@services/QuestionService";

// Create a component for the quiz question
export default function QuizQuestion() {
  const [question, setQuestion] = useState(undefined);

  useEffect(() => {
    questionService.getAll().then((data) => {
      setQuestion(data);
    });
  }, []);

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
      <p>
        {!question && <div>Chargment</div>}
        {question && question[0].quest}
      </p>
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
