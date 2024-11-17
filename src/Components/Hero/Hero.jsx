// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure btter education for a better world </h1>
        <p>
          Our cutting-edge curriculum is designed to empower Students with the
          knowledge,skills and experiences needed to excel in the dynamic field
          of education. The primary goal of educational content writing is to
          convey information in an easily understandable manner. Use clear
          language and straightforward sentences when explaining complex
          concepts or ideas.
        </p>

        <button className="btn">
          Explore more <img src={dark_arrow} alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
