import React from "react";

import MovieCards from "../../components/MovieCards/MovieCards";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import infoIcon from "../../assets/info_icon.png";
import playIcon from "../../assets/play_icon.png";
import "../../components/Home/Home.css";

const TvShows = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={heroBanner} alt="banner" className="hero-banner" />

        <div className="content">
          <img src={heroTitle} alt="movie-title" className="title-img" />
          <p className="movie-desc">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
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
          <MovieCards title="Now Playing" endpoint="movie/now_playing" />
        </div>
      </div>
      <div className="more-cards">
        <MovieCards title="Popular" endpoint="movie/popular" />
        <MovieCards title="Top Rated" endpoint="movie/top_rated" />
        <MovieCards title="Upcoming" endpoint="movie/upcoming" />
        <MovieCards title="Trending Movies" endpoint="trending/movie/day" />
        <MovieCards title="Trending TV Shows" endpoint="trending/tv/day" />
        <MovieCards title="Popular TV Shows" endpoint="tv/popular" />
        <MovieCards title="Top Rated TV Shows" endpoint="tv/top_rated" />
      </div>
    </div>
  );
};

export default TvShows;
