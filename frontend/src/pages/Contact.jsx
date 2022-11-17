import ContactAbout from "@components/contactAbout";
import ContactForm from "@components/contactForm";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contactbox">
        <div className="contactForm">
          <ContactForm />
        </div>

        <div className="contactText">
          <ContactAbout />
        </div>
      </div>
      <Footer />
    </>
  );
}
