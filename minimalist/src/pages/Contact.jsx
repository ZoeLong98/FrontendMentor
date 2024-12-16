import React from "react";
import Getintouch from "../components/Getintouch";
import ContactForm from "../components/ContactForm";
import "../styles/decoration.css";
export default function Contact() {
  return (
    <>
      <hr className="divider" />
      <Getintouch />
      <hr className="divider" />
      <ContactForm />
    </>
  );
}
