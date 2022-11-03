import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "@assets/css/Error.css";
import lottieBackground from "@assets/lottie-file/background-quiz.json";
import test from "@assets/lottie-file/test.json";

export default function Error() {
  return (
    <div className="Error">
      <Player
        loop
        src={lottieBackground}
        autoplay
        className="lottie-background"
      />
      <section className="error">
        <div className="errorContainer">
          <Player
            className="lottie-error"
            loop
            autoplay
            src={test}
            style={{ height: "300px", width: "300px" }}
          />
          <div className="errorTitle">404</div>
          <p>Il semblerais que vous êtes tombé dans un trou noir...</p>
          <p>
            pas de panique ! cliquer sur le bouton pour retourner sur la page
            principale
          </p>
          <div className="buttonContainer">
            <button type="button" className="button">
              Accueil
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
