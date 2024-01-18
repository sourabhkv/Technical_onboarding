/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "YTDL",
    description:
      "A GUI web media downloader program that runs on top of youtube-dl/yt-dlp and ffmpeg to download videos and audio",
    url: "https://sourabhkv.github.io/2021-11-21-ytdl-journey/",
  },
  {
    title: "teX",
    description:
      "text editor X - code redefined",
    url: "https://github.com/sourabhkv/teX",
  },
  {
    title: "degoogled-forms",
    description:
      "Start a server from scratch ,handle everything ; URL request ,GET request, POST request, manage data , clean , analyse it without google forms. #degoogled",
    url: "https://github.com/sourabhkv/degoogled-forms",
  },
  {
    title: "Car-price-predictor",
    description:
      "Analyzed , cleaned , modelled , deployed car data for various models and predicting prize",
    url: "https://github.com/sourabhkv/Car-Price-predictor",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
