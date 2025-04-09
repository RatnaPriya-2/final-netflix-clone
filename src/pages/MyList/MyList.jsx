import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading/Loading";
import "../../pages/BrowseByLanguages/BrowseByLanguages.css";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMovies = async (pageNumber) => {
    try {
      const paramsString = encodeURIComponent(
        `certification_country=US&certification.lte=G&sort_by=popularity.desc&with_genres=16,10751&page=${pageNumber}`
      );

      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=discover/movie&params=${paramsString}`
      );

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetch100Movies = async () => {
    setLoading(true);
    let moviesList = [];

    for (let i = 1; i <= 3; i++) {
      let movies = await fetchMovies(i);
      if (movies) {
        moviesList.push(...movies);
      }
    }

    setData(moviesList);
    setLoading(false);
  };

  useEffect(() => {
    fetch100Movies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="language-hero-container">
      <div className="movie-language-cards-container">
        <div className="cards-list">
          {data
            .filter((movie) => movie.backdrop_path)
            .map((movie, index) => (
              <div
                key={index}
                className="card-data"
                onClick={() => navigate(`/player/movie/${movie.id}`)}
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
    </div>
  );
};

export default MyList;
