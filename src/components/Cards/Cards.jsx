import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ title ,list}) => {
  const navigate = useNavigate()
  return (
    <div className="movie-cards-container">
      <h3>{title}</h3>
      <div className="cards-list">
        {list
          .filter((movie) => movie.backdrop_path)
          .map((movie, index) => (
            <div
              key={index}
              className="card-data"
              onClick={() =>
                navigate(`/player/movie/${movie.id}`)
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

export default Cards;
