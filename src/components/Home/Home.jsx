import React, { useEffect, useState } from "react";

import "../../components/Home/Home.css";
import MovieCards from "../MovieCards/MovieCards";

import Hero from "../Hero/Hero";
import Loading from "../Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero-container">
          <Hero />
          <div className="more-cards">
            <MovieCards title="Now Playing" endpoint="movie/now_playing" />
            <MovieCards title="Popular" endpoint="movie/popular" />
            <MovieCards title="Top Rated" endpoint="movie/top_rated" />
            <MovieCards title="Upcoming" endpoint="movie/upcoming" />
            <MovieCards title="Trending Movies" endpoint="trending/movie/day" />
            <MovieCards title="Trending TV Shows" endpoint="trending/tv/day" />
            <MovieCards title="Popular TV Shows" endpoint="tv/popular" />
            <MovieCards title="Top Rated TV Shows" endpoint="tv/top_rated" />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
