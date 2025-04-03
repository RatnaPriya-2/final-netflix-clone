import React from "react";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import infoIcon from "../../assets/info_icon.png";
import playIcon from "../../assets/play_icon.png";
import MovieCards from "../MovieCards/MovieCards";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroBanner} alt="banner" className="hero-banner" />

      <div className="content">
        <img src={heroTitle} alt="movie-title" className="title-img" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>

        <div className="btns">
          <button className="btn">
            <img src={playIcon} alt="play-icon" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={infoIcon} alt="info-icon" />
            More info
          </button>
        </div>
        <MovieCards title="Now Playing" category="now_playing" />
      </div>
    </div>
  );
};

export default Hero;
