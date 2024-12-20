import React from "react";
import "../styles/AboutMe.css";
import { Link } from "react-router-dom";
export default function AboutMe() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="aboutMe">
      <div className="profile-container">
        <picture>
          <source
            srcSet="/homepage/mobile/image-homepage-profile@2x.jpg"
            media="(max-width: 400px)"
          />
          <source
            srcSet="/homepage/tablet/image-homepage-profile@2x.jpg"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/homepage/desktop/image-homepage-profile@2x.jpg"
            media="(min-width: 769px)"
          />
          <img
            src="/homepage/desktop/image-homepage-profile@2x.jpg"
            alt="profile"
            className="profile-pic"
          />
        </picture>
      </div>
      <div className="profile-text">
        <hr className="divider" />
        <h1>About Me</h1>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <div>
          <Link to="/portfolio" onClick={scrollToTop}>
            Go To Portfolio
          </Link>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
}
