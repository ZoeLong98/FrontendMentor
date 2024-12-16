import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/projectNav.css";

export default function DetailNav({ previous, next }) {
  const navigate = useNavigate();

  const handleButtonClickp = () => {
    navigate("/portfolio/" + previous);
    window.scrollTo(0, 0);
  };
  const handleButtonClickn = () => {
    navigate("/portfolio/" + next);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <hr className="divider" />
      <div className="pronav">
        <div className="left">
          <img
            src="/icons/arrow-left.svg"
            alt=""
            className="icon"
            onClick={handleButtonClickp}
          />
          <div>
            <h2>{previous}</h2>
            <div>Previous Project</div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="right">
          <div>
            <h2>{next}</h2>
            <div>Next Project</div>
          </div>
          <img
            src="/icons/arrow-right.svg"
            alt=""
            className="iconarr"
            onClick={handleButtonClickn}
          />
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
}
