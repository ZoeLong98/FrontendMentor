import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import ContactMe from "../components/ContactMe";

export default function Portfolio() {
  const portfolioData = [
    {
      imageSrc: "/portfolio/desktop/image-portfolio-manage@2x.jpg",
      title: "Manage",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      layout: "normal",
      projectLink: "manage",
    },
    {
      imageSrc: "/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
      title: "Bookmark",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      layout: "reverse",
      projectLink: "Bookmark",
    },
    {
      imageSrc: "/portfolio/desktop/image-portfolio-insure@2x.jpg",
      title: "Insure",
      description:
        "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
      layout: "normal",
      projectLink: "Insure",
    },
    {
      imageSrc: "/portfolio/desktop/image-portfolio-fylo@2x.jpg",
      title: "Fylo",
      description:
        "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
      layout: "reverse",
      projectLink: "Fylo",
    },
  ];
  return (
    <>
      {portfolioData.map((item, index) => (
        <PortfolioCard
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          layout={item.layout}
          projectLink={item.projectLink}
        />
      ))}
      <ContactMe />
    </>
  );
}
