import React from "react";
import "./Navbar.css";
import logo from "@assets/logo-quizverse.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Login">Login</div>
      <img src={logo} alt="QuizVerse Logo" />
      <ul>
        <button type="button">
          <li>
            <a href="Accueil.html">Accueil</a>
          </li>
        </button>
        <button type="button">
          <li>
            <a href="Quiz.html">Quiz</a>
          </li>
        </button>
        <button type="button">
          <li>
            <a href="Infos.html">Infos</a>
          </li>
        </button>
        <button type="button">
          <li>
            <a href="Contact.html">Contact</a>
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
