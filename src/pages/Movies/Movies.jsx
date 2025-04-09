import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import MovieCards from "../../components/MovieCards/MovieCards";
import Loading from "../../components/Loading/Loading";
import genres from "../../genreData";
import "../../pages/Movies/Movies.css";
import movieCardsList from "../../movieCardsList";

import Cards from "../../components/Cards/Cards";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [genre, setGenre] = useState("Genre");
  const [selectedGenreHero, setSelectedGenreHero] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleGenreList = (genre) => {
    setIsOpen(!isOpen);
    setGenre(genre);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  const fetchMoviesByGenre = async (pageNumber) => {
    try {
      const paramsString = encodeURIComponent(
        `with_genres=${genre.id}&page=${pageNumber}&include_adult=false`
      );

      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=discover/movie&params=${paramsString}`
      );

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  const fetch100MoviesByGenre = async () => {
    setLoading(true);
    let moviesList = [];

    for (let i = 1; i <= 5; i++) {
      let movies = await fetchMoviesByGenre(i);
      if (movies) {
        moviesList.push(...movies);
      }
    }

    setData(moviesList);
    if (moviesList.length > 0) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * moviesList.length);
      } while (!moviesList[randomIndex].backdrop_path);

      setSelectedGenreHero(moviesList[randomIndex]);
    }
    setLoading(false);
  };
  const [heroData, setHeroData] = useState(null);

  const fetchHeroMovie = async () => {
    try {
      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=movie/popular`
      );
      const heroData = await response.json();
      let randomMovie = Math.floor(Math.random() * heroData.results.length);
      let finalMovie = heroData.results[randomMovie];

      setHeroData(finalMovie || []); // Access results from the response
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchHeroMovie();
  }, []);

  useEffect(() => {
    fetch100MoviesByGenre();
  }, [genre]);

  console.log(genre);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero-container">
          <div className="filter-by-genre">
            <p className="label-for-genre">Movies</p>
            <div className="genre-filter-cluster">
              <div
                className="filter-cluster"
                onClick={() => setIsOpen(!isOpen)}
              >
                <input type="text" value={genre?.name || "Genre"} />
                <i className="fa-solid fa-caret-down"></i>
              </div>

              <ul className={`genre-list ${isOpen ? "open" : ""}`}>
                {genres.map((genre, index) => (
                  <li key={index} onClick={() => handleGenreList(genre)}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Hero heroData={genre === "Genre" ? heroData : selectedGenreHero} />
          {genre !== "Genre" ? (
            <div className="more-cards">
              <Cards title="Now Playing" list={data && data.slice(0, 20)} />
              <Cards title="Popular" list={data && data.slice(20, 40)} />
              <Cards title="Trending" list={data && data.slice(40, 60)} />
              <Cards title="Top Rated" list={data && data.slice(60, 80)} />
              <Cards title="Upcoming" list={data && data.slice(80, 100)} />
            </div>
          ) : (
            <div className="more-cards">
              {movieCardsList.map(({ title, endpoint, params }) => {
                return (
                  <MovieCards
                    title={title}
                    endpoint={endpoint}
                    params={params}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
