import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import questionService from "@services/QuestionService";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion() {
  const [question, setQuestion] = useState(undefined);

  useEffect(() => {
    questionService.getAll().then((data) => {
      setQuestion(data);
    });
  }, []);

  return (
    <>
      {!question && <div>loading...</div>}
      {question && (
        <>
          <Player
            autoplay
            loop
            src={`${API_BASE_URL}/lottie/${question[8].lottie}`}
            style={{ height: "150px", width: "150px" }}
          />
          <p>{question[3].quest}</p>
          <div className="buttonAnswerContainer">
            {question[3].answers.map((answer) => (
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
