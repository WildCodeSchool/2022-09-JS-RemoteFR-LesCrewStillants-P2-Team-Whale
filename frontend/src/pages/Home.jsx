import LevelButton from "@components/LevelButton";
// eslint-disable-next-line no-unused-vars
import "./Home.css";
import MyTabs from "@components/TableScore";

export default function Home() {
  return (
    <>
      <header className="quiz-header">
        <h1>Testez vos connaissances du système solaire :</h1>
        <LevelButton />
      </header>
      <div className="scores-table">
        <h2>DERNIERS SCORES</h2>
        <MyTabs />
      </div>
    </>
  );
}
