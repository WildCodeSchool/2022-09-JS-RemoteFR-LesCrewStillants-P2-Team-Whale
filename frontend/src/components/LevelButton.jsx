import "./LevelButton.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LevelButton() {
  return (
    <div className="LevelButton">
      <Link to="/quiz">
        <button className="btn-game" type="button" onClick>
          <div className="text">JOUEZ MAINTENANT</div>
        </button>
      </Link>
    </div>
  );
}
