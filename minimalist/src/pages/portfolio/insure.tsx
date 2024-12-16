import React from "react";
import PortfolioDetail from "../../components/PortfolioDetail";

export default function Manage() {
  const info = {
    imageTitle: "/detail/desktop/image-insure-hero@2x.jpg",
    title: "Insure",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    technology: [
      "Interaction Design / Front End Development",
      "HTML / CSS / JS",
    ],
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    staticPreview: [
      "/detail/desktop/image-insure-preview-1@2x.jpg",
      "/detail/desktop/image-insure-preview-2@2x.jpg",
    ],
  };
  return (
    <PortfolioDetail
      imageTitle={info.imageTitle}
      title={info.title}
      description={info.description}
      technology={info.technology}
      background={info.background}
      staticPreview={info.staticPreview}
      previous="Bookmark"
      next="Fylo"
    />
  );
}
