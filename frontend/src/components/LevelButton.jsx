import "./LevelButton.css";
import { Link } from "react-router-dom";

export default function LevelButton() {
  return (
    <div className="LevelButton">
      <Link to="/quiz">
        <button type="button" onClick>
          <div className="text">JOUEZ MAINTENANT</div>
        </button>
      </Link>
    </div>
  );
}
