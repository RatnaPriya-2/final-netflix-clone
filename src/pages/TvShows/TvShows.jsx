import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards/MovieCards";

import "../../components/Home/Home.css";
import Hero from "../../components/Hero/Hero";
import Loading from "../../components/Loading/Loading";
import tvShowCategories from "../../TvShowData";

const TvShows = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState(null);

  const fetchHeroMovie = async () => {
    try {
      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=tv/top_rated&params=language=en-US&page=1`
      );
      const heroData = await response.json();
      let randomMovie;
      do {
        randomMovie = Math.floor(Math.random() * heroData.results.length);
      } while (!heroData.results[randomMovie].backdrop_path);
      let finalMovie = heroData.results[randomMovie];

      setHeroData(finalMovie || []); // Access results from the response
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchHeroMovie();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000); // Move 3000 inside setTimeout

    return () => clearTimeout(id);
  }, []); // Empty dependency array

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero-container">
          <Hero heroData={heroData} />
          <div className="more-cards">
            {tvShowCategories.map((category, index) => (
              <MovieCards
                key={index}
                title={category.title}
                endpoint={category.endpoint}
                params={category.params}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TvShows;
