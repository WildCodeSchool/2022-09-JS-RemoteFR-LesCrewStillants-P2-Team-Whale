import './../assets/css/Quiz.css';

export default function Quiz() {
  return (
    <>
      <section className="quiz"> 
        <img src="./img/logo.png" alt="Quiz" className="logo" />
        <div className="quizContainer">
          <p>Hello aventurier de l'espace</p>
          <p>Choisissez votre difficultée</p>
          <div className="buttonContainer">
            <button className="buttonDifficulty">Facile</button>
            <button className="buttonDifficulty">Difficile</button>
          </div>
        </div>
      </section>
    </>
  );
}
