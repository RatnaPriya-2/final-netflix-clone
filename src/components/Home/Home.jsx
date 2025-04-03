import React from "react";

import "../../components/Home/Home.css";
import MovieCards from "../MovieCards/MovieCards";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <Hero />
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
    </>
  );
};

export default Home;
