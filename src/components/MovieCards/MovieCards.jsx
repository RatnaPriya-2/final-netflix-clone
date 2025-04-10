import React, { useEffect, useState } from "react";
import "../../components/MovieCards/MovieCards.css";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ title, endpoint, params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchMovies = async (endpoint, params = "") => {
    try {
      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=${endpoint}&params=${encodeURIComponent(
          params
        )}`
      );
      const result = await response.json();

      const mediaType = endpoint.includes("movie")
        ? "movie"
        : endpoint.includes("tv")
        ? "tv"
        : "";

      const resultsWithType = result.results.map((item) => ({
        ...item,
        media_type: item.media_type || mediaType, // prefer existing if present
      }));

      setData(resultsWithType);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (endpoint) fetchMovies(endpoint, params || "");
  }, [endpoint, params]);

  return (
    <div className="movie-cards-container">
      <h3>{title}</h3>
      <div className="cards-list">
        {data
          .filter((movie) => movie.backdrop_path)
          .map((movie, index) => (
            <div
              key={index}
              className="card-data"
              onClick={() =>
                navigate(`/player/${movie.media_type}/${movie.id}`)
              }
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />
              <p>{movie.title || movie.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieCards;
