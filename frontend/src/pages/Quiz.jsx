import "@assets/css/Quiz.css";
import logo from "@assets/logo.png";

export default function Quiz() {
  return (
    <section className="quiz">
      <img src={logo} alt="Quiz" className="logo" />
      <div className="quizContainer">
        <p>Hello aventurier de l'espace</p>
        <p>Choisissez votre difficultée</p>
        <div className="buttonContainer">
          <button type="submit" className="buttonDifficulty">
            Facile
          </button>
          <button type="submit" className="buttonDifficulty">
            Difficile
          </button>
        </div>
      </div>
    </section>
  );
}
