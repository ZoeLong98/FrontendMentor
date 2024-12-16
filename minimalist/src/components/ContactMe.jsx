import React from "react";
import "../styles/ContactMe.css";
import "../styles/decoration.css";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className="contactme">
      <h1>Interested in doing a project together?</h1>
      <hr className="divider-contact" />
      <button>
        <Link to="/contact">CONTACT ME</Link>
      </button>
    </div>
  );
}
