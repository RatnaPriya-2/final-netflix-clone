import React, { useEffect, useState } from "react";

import "../../components/MovieCards/MovieCards.css";
import { useGlobalContext } from "../../Context";

const MovieCards = ({ title, category }) => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetchData(category);
  }, [category]);

  console.log(data);
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
      </div>
    </div>
  );
};

export default MovieCards;
