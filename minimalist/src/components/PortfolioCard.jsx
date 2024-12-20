import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PortfolioCard.css";

export default function PortfolioCard({
  imageSrc,
  title,
  description,
  layout,
  projectLink, // 新增的项目链接参数
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(projectLink);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`portfolio-item ${layout === "reverse" ? "reverse" : ""}`}>
      <div className="img-container">
        <img src={imageSrc} alt="port-img" className="portfolio-image" />
      </div>
      <div
        className={`portfolio-text ${layout === "reverse" ? "reverse" : ""}`}
      >
        <hr className="divider" />
        <h1 className="portfolio-title">{title}</h1>
        <p className="portfolio-description">{description}</p>
        <button onClick={handleButtonClick}>VIEW PROJECT</button>
        <hr className="divider" />
      </div>
    </div>
  );
}
