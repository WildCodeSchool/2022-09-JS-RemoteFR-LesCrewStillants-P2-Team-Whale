import "./LevelButton.css";

export default function LevelButton() {
  return (
    <div className="LevelButton">
      <button type="button" onClick>
        <div className="text">FACILE</div>
      </button>
      <button type="button" onClick>
        <div className="text">DIFFICILE</div>
      </button>
    </div>
  );
}
