import React from "react";
import "../styles/Footer.css";
import Socialicons from "./Socialicons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#FFFFFF"
            fill-rule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>
        <nav className="footer-nav">
          <a href="/">HOME</a>
          <a href="/portfolio">PORTFOLIO</a>
          <a href="/contact">CONTACT ME</a>
        </nav>
      </div>
      <Socialicons iconColor="#000000" />
    </footer>
  );
}
