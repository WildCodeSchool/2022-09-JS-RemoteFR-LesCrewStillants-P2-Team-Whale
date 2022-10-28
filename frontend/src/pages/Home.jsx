import LevelButton from "@components/LevelButton";
// eslint-disable-next-line no-unused-vars
import "./Home.css";
import MyTabs from "@components/TableScore";
import wild from "@assets/wild-logo.png";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="quiz-header">
        <h1>Testez vos connaissances du système solaire :</h1>
        <LevelButton />
      </header>
      <div className="scores-table">
        <h2>DERNIERS SCORES</h2>
        <MyTabs />
      </div>
      <div className="project">
        <h3>NOTRE PROJET</h3>
        <section className="project-content">
          <div className="project-description">
            <p>
              Lorem ipsum dolor sit amet. Non distinctio aspernatur ea
              voluptatibus culpa est excepturi facilis. Non labore impedit aut
              dicta deleniti aut explicabo maiores nam eveniet veniam ut ullam
              corporis consequuntur voluptate.
            </p>

            <p>
              Lorem ipsum dolor sit amet. Non distinctio aspernatur ea
              voluptatibus culpa est excepturi facilis. Non labore impedit aut
              dicta deleniti aut explicabo maiores nam eveniet veniam ut ullam
              corporis consequuntur voluptate.
            </p>
          </div>
          <img className="logo-wild" src={wild} alt="wild-logo" />
        </section>
      </div>
    </>
  );
}
