import React from "react";
import "../styles/ContactMe.css";
import "../styles/decoration.css";
import { Link } from "react-router-dom";

export default function ContactMe() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="contactme">
      <h1>Interested in doing a project together?</h1>
      <hr className="divider-contact" />
      <div>
        <Link to="/contact" onClick={scrollToTop}>
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}
