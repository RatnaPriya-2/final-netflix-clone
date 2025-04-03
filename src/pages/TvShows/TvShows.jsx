import React from 'react'
import Hero from '../../components/Hero/Hero'
import MovieCards from '../../components/MovieCards/MovieCards';

const TvShows = () => {
  return (
    <>
      <Hero />
      <div className="more-cards">
        <MovieCards title="Popular" category="popular" />
        <MovieCards title="Top Rated" category="top_rated" />
        <MovieCards title="Upcoming" category="upcoming" />
        <MovieCards title="Trending Movies" category1="trending/movie/day" />
        <MovieCards title="Trending TV Shows" category1="trending/tv/day" />
        <MovieCards title="Popular TV Shows" category1="tv/popular" />
        <MovieCards title="Top Rated TV Shows" category1="tv/top_rated" />
      </div>
    </>
  );
}

export default TvShows
