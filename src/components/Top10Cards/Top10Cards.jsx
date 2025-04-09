import React, { useEffect, useState } from "react";
import imageSrcArray from "../../ImgaeSrc";
import "../../components/Top10Cards/Top10Cards.css";
import { useNavigate } from "react-router-dom";

const Top10Cards = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const navigate = useNavigate()
  const fetchMoviesAndShows = async () => {
    try {
      const movieResponse = await fetch(
        `/.netlify/functions/tmdb?endpoint=discover/movie&params=with_origin_country=IN&sort_by=popularity.desc&page=1`
      );
      const movieData = await movieResponse.json();
      setMovies(movieData.results.filter((movie) => movie.poster_path));

      const tvResponse = await fetch(
        `/.netlify/functions/tmdb?endpoint=discover/tv&params=with_origin_country=IN&sort_by=popularity.desc&page=1`
      );
      const tvData = await tvResponse.json();
      setTVShows(tvData.results.filter((movie) => movie.poster_path));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMoviesAndShows();
  }, []);

  console.log(movies, tvShows);
  return (
    <div className="movie-cards-container">
      <div className="movies-container">
        <h3>Top 10 Movies in India Today</h3>
        <div className="cards-list">
          {movies.slice(0, 10).map((movie, index) => {
            return (
              <>
                <div
                  className="card-content"
                  onClick={() =>
                    navigate(`/player/movie/${movie.id}`)
                  }
                >
                  <img
                    className="number-img"
                    src={imageSrcArray[index]}
                    alt="number"
                  />
                  <img
                    className="poster-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie?.title}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="tvshows-container">
        <h3>Top 10 TV Shows in India Today</h3>
        <div className="cards-list">
          {tvShows.slice(0, 10).map((movie, index) => {
            return (
              <>
                <div
                  className="card-content"
                  onClick={() => navigate(`/player/tv/${movie.id}`)}
                >
                  <img
                    className="number-img"
                    src={imageSrcArray[index]}
                    alt="number"
                  />
                  <img
                    className="poster-img"
                    src={`https://image.tmdb.org/t/p/w500${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt={movie?.title}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top10Cards;
