import React, { useEffect, useState } from "react";

import movieLanguages from "../../languageData";
import Loading from "../../components/Loading/Loading";
import "../../pages/BrowseByLanguages/BrowseByLanguages.css";
import { useNavigate } from "react-router-dom";

const BrowseByLanguages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [language, setLanguage] = useState({
    name: "English",
    originalCode: "en",
    code: "en-US",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageList = (language) => {
    setIsOpen(!isOpen);
    setLanguage(language);
  };

  const fetchMovies = async (pageNumber) => {
    try {
      const paramsString = encodeURIComponent(
        `with_original_language=${language.originalCode}&sort_by=popularity.desc&page=${pageNumber}&include_adult=false`
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

  useEffect(() => {
    const fetch100Movies = async () => {
      setLoading(true);
      let moviesList = [];

      for (let i = 1; i <= 5; i++) {
        let movies = await fetchMovies(i);
        if (movies) {
          moviesList.push(...movies);
        }
      }

      setData(moviesList);
      setLoading(false);
    };

    fetch100Movies();
  }, [language]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="language-hero-container">
      <div className="movie-language-cards-container">
        <div className="filter-by-language">
          <p className="label-for-languages">Browse by Languages</p>
          <div className="language-filter-cluster">
            <div className="filter-cluster" onClick={() => setIsOpen(!isOpen)}>
              <input type="text" value={language.name} />
              <i className="fa-solid fa-caret-down"></i>
            </div>

            <ul className={`language-list ${isOpen ? "open" : ""}`}>
              {movieLanguages.map((language, index) => (
                <li key={index} onClick={() => handleLanguageList(language)}>
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

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

export default BrowseByLanguages;
