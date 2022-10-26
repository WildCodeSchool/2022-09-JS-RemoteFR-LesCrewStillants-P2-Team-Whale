import LevelButton from "@components/LevelButton";
// eslint-disable-next-line no-unused-vars
import header from "@assets/header-quizz.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header className="Quizz-header">
        <h1>
          Testez vos connaissances du système solaire ! Jouez maintenant :
        </h1>
        <LevelButton />
      </header>
      <div className="scores-table">
        <h2>MEILLEURS SCORES</h2>
        *Choir niveau* *Tableau des scores*
      </div>
    </>
  );
}
