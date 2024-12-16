import React from "react";
import "../styles/BriefIntro.css";

export default function BriefIntro() {
  return (
    <div className="Intro-section">
      <picture>
        <source
          srcSet="/homepage/mobile/image-homepage-hero@2x.jpg"
          media="(max-width: 376px)"
        />
        <source
          srcSet="/homepage/tablet/image-homepage-hero@2x.jpg"
          media="(max-width: 768px)"
        />
        <source
          srcSet="/homepage/desktop/image-homepage-hero@2x.jpg"
          media="(min-width: 769px)"
        />
        <img
          src="/homepage/desktop/image-homepage-hero@2x.jpg"
          alt="Hero background"
          className="Intro-pic"
        />
      </picture>
      <div className="Intro-content">
        <h1 className="Intro-title">
          Hey, I'm Alex Spencer and I love building beautiful websites
        </h1>
        <button className="cta-button">
          <div className="cta-icon-container">
            <img src="/icons/down-arrows.svg" alt="" className="cta-icon" />
          </div>
          <span className="cta-text">ABOUT ME</span>
        </button>
      </div>
    </div>
  );
}
