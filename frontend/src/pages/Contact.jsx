import ContactAbout from "@components/contactAbout";
import ContactForm from "@components/contactForm";
import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactbox">
      <div className="contactForm">
        <ContactForm />
      </div>
      <div className="spaceholder"> </div>
      <div className="contactText">
        <ContactAbout />
      </div>
    </div>
  );
}
