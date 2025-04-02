import React, { useEffect, useState } from "react";

import "../../components/MovieCards/MovieCards.css";
import { useGlobalContext } from "../../Context";

const MovieCards = ({ title, category }) => {
  const [data, setData] = useState([]);
  const { movieCardsRef } = useGlobalContext();

  const fetchData = (category) => {
    fetch(`/api/movies/${category ? category : "now_playing"}`)
      .then((res) => res.json())
      .then((res) => setData(res))
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
