import React, { useEffect, useState } from "react";

const MovieCards = ({ title, endpoint }) => {
  const [data, setData] = useState([]);

  const fetchMovies = async (endpoint) => {
    try {
      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=${endpoint}`
      );
      const data = await response.json();
      setData(data.results || []); // Access results from the response
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (endpoint) fetchMovies(endpoint);
  }, [endpoint]);

  return (
    <div>
      <h3>{title}</h3>
      <div className="movie-cards">
        {data.map((movie, index) => (
          <div key={index} className="movie-card">
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
