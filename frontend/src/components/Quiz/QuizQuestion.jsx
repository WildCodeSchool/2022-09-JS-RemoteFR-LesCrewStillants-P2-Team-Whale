import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionService from "@services/QuestionService";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

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
    if (questionIndex + 1 < 10) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/quiz/score");
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
            src={`${API_BASE_URL}/lottie/${question[questionIndex].lottie}`}
            style={{ height: "150px", width: "150px" }}
          />
          <p>{question[questionIndex].quest}</p>
          <div className="buttonAnswerContainer">
            {question[questionIndex].answers.map((answer) => (
              <button
                key={answer}
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
            <p>{questionIndex + 1}/10</p>
          </div>
        </>
      )}
    </>
  );
}
