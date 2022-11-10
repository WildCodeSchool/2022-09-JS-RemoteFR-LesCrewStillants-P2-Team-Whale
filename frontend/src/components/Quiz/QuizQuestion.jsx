import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import questionService from "@services/QuestionService";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);

  useEffect(() => {
    if (difficulty === "easy") {
      questionService.getEsyQuestions().then((response) => {
        setQuestion(response);
      });
    } else if (difficulty === "hard") {
      questionService.getHardQuestions().then((response) => {
        setQuestion(response);
      });
    }
  }, [difficulty]);

  return (
    <>
      {!question && <div>loading...</div>}
      {question && (
        <>
          <Player
            autoplay
            loop
            src={`${API_BASE_URL}/lottie/${question[1].lottie}`}
            style={{ height: "150px", width: "150px" }}
          />
          <p>{question[1].quest}</p>
          <div className="buttonAnswerContainer">
            {question[1].answers.map((answer) => (
              <button type="submit" className="answerButton">
                {answer}
              </button>
            ))}
          </div>
          <div className="buttonResetContainer">
            <button type="button" className="resetButton">
              Reset
            </button>
          </div>
        </>
      )}
    </>
  );
}
