import React, { useEffect, useState } from "react";
import "../../components/BigCard/BigCard.css";
import genres from "../../genreData";

const BigCard = ({ movie}) => {
  const [genreData, setGenreData] = useState([]);

  const fetchGenres = () => {
    const allGenres = movie.genre_ids.map(
      (genre) => genres.find((item) => item.id === genre)?.name
    );
    setGenreData(allGenres);
  };
  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <div className="big-card-wrapper">
      <div className="big-card-container">
        <img
          className="big-card-container-img"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="movie-poster"
        />
        <div className="big-card-content">
          <div className="big-card-icons">
            <div className="left-icons">
              <div className="icon">
                <i className="fa fa-play" />
              </div>
              <div className="icon">
                <i className="fa fa-plus" />
              </div>
            </div>
            <div className="right-icons">
              <div className="icon">
                <i className="fa fa-info" />
              </div>
            </div>
          </div>
          <ul className="genre">
            {genreData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
