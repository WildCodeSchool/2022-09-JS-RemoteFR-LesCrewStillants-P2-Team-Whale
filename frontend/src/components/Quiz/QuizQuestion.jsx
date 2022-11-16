import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import questionService from "@services/QuestionService";
import book from "@assets/lottie-file/book.json";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

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

  const handleAnswer = () => {
    setSelectedAnswer(true);
  };

  const handleClick = (correctAnswer) => {
    if (correctAnswer) {
      setScore(score + 1);
    }
    if (questionIndex + 1 < 10) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      {ShowResult ? (
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
          <p className="score">{score} / 10</p>
          <p>Almost there !</p>
          <input className="inputName" type="text" placeholder="Your name" />
          <div className="buttonScoreContainer">
            <button type="submit" className="buttonSubmit">
              Submit
            </button>
            <button type="submit" className="buttonScore" onClick={handleClick}>
              Accueil
            </button>
          </div>
        </>
      ) : (
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
                    onClick={handleAnswer}
                    className={
                      selectedAnswer ? "answerButtonSelected" : "answerButton"
                    }
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <div className="buttonResetContainer">
                <button type="button" className="resetButton">
                  Valider
                </button>
                <p>{questionIndex + 1}/10</p>
                <p>Mon score : {score}</p>
              </div>
            </>
          )}
        </>
      )}
      )
    </>
  );
}
