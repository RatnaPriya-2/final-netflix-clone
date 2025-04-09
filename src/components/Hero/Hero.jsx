import React, { useEffect, useState } from "react";
import "../../components/Home/Home.css";

import infoIcon from "../../assets/info_icon.png";
import playIcon from "../../assets/play_icon.png";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const [heroData, setHeroData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const navigate = useNavigate();
  // const [heroLoading, setHeroLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        const response = await fetch(
          `/.netlify/functions/tmdb?endpoint=movie/popular`
        );
        const heroData = await response.json();
        let randomMovie = Math.floor(Math.random() * heroData.results.length);
        let finalMovie = heroData.results[randomMovie];

        setHeroData(finalMovie || []); // Access results from the response
        // setHeroLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (props.heroData) {
      setHeroData(props.heroData);
      // setHeroLoading(false);
    } else {
      fetchHeroMovie();
    }
  }, [props.heroData]);

  return (
    <div className="hero">
      <img
        src={`https://image.tmdb.org/t/p/w500${heroData?.backdrop_path}`}
        alt={heroData?.title || heroData?.name}
        className="hero-banner"
      />
      <div className="content">
        <p className="movie-title">
          {heroData?.original_title || heroData?.original_name}
        </p>
        <p className="movie-desc">
          {heroData?.overview &&
            (heroData.overview.length > (isMobile ? 100 : 200)
              ? `${heroData.overview.slice(0, isMobile ? 100 : 200)}...`
              : heroData.overview)}
        </p>

        <div className="btns">
          <button
            className="btn"
            onClick={() => navigate(`/player/movie/${heroData.id}`)}
          >
            <img src={playIcon} alt="play-icon" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={infoIcon} alt="info-icon" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
