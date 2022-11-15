import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import questionService from "@services/QuestionService";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(0);
  const [count, setCount] = useState(0);

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

  const handleClick = () => {
    if (count < 9) {
      setCount(count + 1);
    } else {
      redirect("quizscore");
    }
  };

  return (
    <>
      {!question && <div>loading...</div>}
      {question && (
        <>
          <Player
            autoplay
            loop
            src={`${API_BASE_URL}/lottie/${question[count].lottie}`}
            style={{ height: "150px", width: "150px" }}
          />
          <p>{question[count].quest}</p>
          <div className="buttonAnswerContainer">
            {question[count].answers.map((answer) => (
              <button
                type="submit"
                onClick={handleClick}
                className="answerButton"
              >
                {answer}
              </button>
            ))}
          </div>
          <div className="buttonResetContainer">
            <button type="button" className="resetButton">
              Reset
            </button>
            <p>{count + 1}/10</p>
          </div>
        </>
      )}
    </>
  );
}
