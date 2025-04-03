import React, { useEffect, useState } from "react";

import "../../components/MovieCards/MovieCards.css";
import { useGlobalContext } from "../../Context";

const MovieCards = ({ title, category, category1 }) => {
  console.log(category1);
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const { movieCardsRef } = useGlobalContext();

  const fetchData = (category) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY; // This will get the API key from the environment variables

    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  };
  const fetchMovieData = (category1) => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY; // This will get the API key from the environment variables

    fetch(
      `https://api.themoviedb.org/3/${category1}?language=en-US&page=1&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (category) fetchData(category);
    if (category1) fetchMovieData(category1);
  }, [category, category1]);

  // console.log(data);
  return (
    <div className="movie-cards-container">
      <h3>{title ? title : "Popular on Netflix"}</h3>
      <div className="cards-list" ref={movieCardsRef}>
        {data.map((card, index) => {
          return (
            <div key={index} className="card-data">
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="movie-poster"
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
        {movieData.map((card, index) => {
          return (
            <div key={index} className="card-data">
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="movie-poster"
              />
              <p>{card.original_title||card.original_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCards;
