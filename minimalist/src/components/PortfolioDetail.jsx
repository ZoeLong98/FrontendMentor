import React from "react";
import "../styles/PortfolioDetail.css";
import "../styles/decoration.css";
import ContactMe from "./ContactMe";
import ProjectNav from "../components/projectNav";

export default function PortfolioDetail({
  imageTitle,
  title,
  description,
  technology,
  background,
  staticPreview,
  previous,
  next,
}) {
  return (
    <div className="detailwrapper">
      <div>
        <img src={imageTitle} alt="" className="detail-img" />
      </div>
      <div className="detailContainer">
        <div className="overview">
          <hr className="divider" />
          <h1>{title}</h1>
          <div className="divide">
            <p>{description}</p>
            <div>
              <div className="technology">{technology[0]}</div>
              <div className="technology">{technology[1]}</div>
              <button>VISIT WEBSITE</button>
            </div>
          </div>

          <hr className="divider" />
        </div>
        <div className="detail">
          <div className="background">
            <h2>Project Background</h2>
            <p>{background}</p>
          </div>
          <div className="previews">
            <h2>Static Previews</h2>
            {staticPreview.map((item, index) => (
              <img src={item} className="static-img" key={index} />
            ))}
          </div>
        </div>
      </div>
      <ProjectNav previous={previous} next={next} />
      <ContactMe />
    </div>
  );
}
