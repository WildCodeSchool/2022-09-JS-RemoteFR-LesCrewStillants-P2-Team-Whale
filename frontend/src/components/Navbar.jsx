import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/quiz">
          <button type="button">
            <li>Quiz</li>
          </button>
        </Link>
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
