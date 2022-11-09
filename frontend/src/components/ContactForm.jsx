import React, { useState } from "react";
import planet from "@assets/planet.png";

import "./ContactForm.css";

function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    const result = await response.json();
    // eslint-disable-next-line no-alert
    alert(result.status);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-box">
        <span>
          <h1 className="title-contact">Contacter Nous</h1>
          <img className="img-alien" src={planet} alt="Visage_Alien" />
        </span>

        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
        </div>
        <button type="submit" className="buttonSubmit">
          {status}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
