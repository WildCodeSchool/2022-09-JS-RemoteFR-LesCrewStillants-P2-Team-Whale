import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import questionService from "@services/QuestionService";
import book from "@assets/lottie-file/book.json";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const customMsg = (
      <div>
        <p id="answerText">La réponse est incorrecte !</p>
        <p id="answerText">
          La bonne réponse est : <b>test</b>
        </p>
        <p id="answerText">
          La bonne réponse est: <b>test</b>
        </p>
        <br />
        <p id="answerText">La terre est plate</p>
      </div>
  );

  const notify = () => {
    toast.error(customMsg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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

  const handleClick = (isCorrect) => {
    if (isCorrect) {
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
                    type="submit"
                    className={
                    "answerButton"
                    }
                    key={answer.id}
                    onClick={() => {
                      handleClick(answer.isCorrect);
                      notify();
                    }}
                  >
                    {answer.name}
                  </button>
                ))}
              </div>
              <ToastContainer />
              <p>{questionIndex + 1}/10</p>
              <p>Mon score : {score}</p>
            </>
          )}
        </>
      )}
      )
    </>
  );
}
