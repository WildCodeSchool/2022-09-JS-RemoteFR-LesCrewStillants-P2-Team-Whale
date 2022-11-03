import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import "@assets/css/Error.css";

import lottieBackground from "@assets/lottie-file/background-quiz.json";
import satellite from "@assets/lottie-file/satellite-error.json";

export default function Error() {
  return (
    <>
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
            src={satellite}
            style={{ height: "300px", width: "300px" }}
          />
          <div className="errorTitle">404</div>
          <p>Il semblerais que vous êtes tombé dans un trou noir...</p>
          <p>
            pas de panique ! cliquer sur le bouton pour retourner sur la page
            principale
          </p>
          <div className="buttonContainer">
            <Link to="/">
              <button type="button" className="button">
                Accueil
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
