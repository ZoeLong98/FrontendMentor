import React from "react";

export default function Socialicons({ iconColor }) {
  return (
    <div className="social-icons">
      <img
        src="/icons/github.svg"
        alt="github"
        className="icon"
        style={{ filter: `invert(${iconColor === "#000000" ? 0 : 1})` }}
      />
      <img
        src="/icons/twitter.svg"
        alt="twitter"
        className="icon"
        style={{ filter: `invert(${iconColor === "#000000" ? 0 : 1})` }}
      />
      <img
        src="/icons/linkedin.svg"
        alt="linkedin"
        className="icon"
        style={{ filter: `invert(${iconColor === "#000000" ? 0 : 1})` }}
      />
    </div>
  );
}
