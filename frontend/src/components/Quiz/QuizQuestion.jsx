import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import axios from "axios";
import questionService from "@services/QuestionService";
import book from "@assets/lottie-file/book.json";
import loader from "@assets/lottie-file/loader.json";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL } from "../../axios/AppConfig";
import "@assets/css/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  async function addScoreEasy() {
    const user = {
      name,
      score,
    };
    if (difficulty !== "easy") {
      await axios.post("https://api.quizverse.space/scores/hard", user);
    } else {
      await axios.post("https://api.quizverse.space/scores/easy", user);
    }
  }

  const notifySubmit = () => toast(`Votre score a bien été enregistré`);

  const notify = (isCorrect, desc) => {
    if (isCorrect) {
      toast.success(
        <div>
          <p id="answerText">Bravo ! La réponse est correcte !</p>
          <p id="answerText">{desc}</p>
        </div>,
        {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } else {
      toast.error(
        <div>
          <p id="answerText">Dommage ! La réponse est incorrecte !</p>
          <p id="answerText">{desc}</p>
        </div>,
        {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
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

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
          <input
            onChange={handleChange}
            className="inputName"
            type="text"
            placeholder="Your name"
          />
          <div className="buttonScoreContainer">
            <button
              type="submit"
              className="buttonSubmit"
              onClick={() => {
                addScoreEasy();
                notifySubmit();
              }}
            >
              Submit
            </button>
            <ToastContainer />
            <button type="submit" className="buttonScore">
              Recommencer
            </button>
          </div>
        </>
      ) : (
        <>
          {!question && (
            <div>
              <Player
                className="lottie-error"
                loop
                autoplay
                src={loader}
                style={{ height: "300px", width: "300px" }}
              />
            </div>
          )}
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
                    className="answerButton"
                    key={answer.id}
                    onClick={() => {
                      handleClick(answer.isCorrect);
                      notify(
                        answer.isCorrect,
                        question[questionIndex].description,
                        answer.isCorrect
                      );
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
    </>
  );
}
