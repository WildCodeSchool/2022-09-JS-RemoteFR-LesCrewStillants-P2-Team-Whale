import ContactAbout from "@components/contactAbout";
import ContactForm from "@components/contactForm";
import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactbox">
      <div id="contactForm">
        <ContactForm />
      </div>
      <div className="spaceholder"> </div>
      <div id="contactText">
        <ContactAbout />
      </div>
    </div>
  );
}
