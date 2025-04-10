import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Top10Cards from "../../components/Top10Cards/Top10Cards";
import Cards from "../../components/Cards/Cards";
import "../../pages/New&Popular/NewAndPopular.css";

const NewAndPopular = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchMoviesByPopular = async (pageNumber) => {
    try {
      const paramsString = encodeURIComponent(
        `page=${pageNumber}&include_adult=false`
      );

      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=movie/popular&params=${paramsString}`
      );

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  const fetch100MoviesByPopular = async () => {
    setLoading(true);
    let moviesList = [];

    for (let i = 1; i <= 5; i++) {
      let movies = await fetchMoviesByPopular(i);
      if (movies) {
        moviesList.push(...movies);
      }
    }

    setData(moviesList);
    setLoading(false);
  };
  useEffect(() => {
    fetch100MoviesByPopular();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000); // Move 3000 inside setTimeout

    return () => clearTimeout(id);
  }, []); // Empty dependency array

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero-container">
          <div className="popular-more-cards">
            <Cards title="Coming Next Week" list={data && data.slice(0, 20)} />
            <Cards title="New on Netflix" list={data && data.slice(20, 40)} />
            <Cards title="Coming This Week" list={data && data.slice(40, 60)} />
            <Cards title="Worth the Wait" list={data && data.slice(60, 80)} />
            <Cards title="Upcoming" list={data && data.slice(80, 100)} />
            <Top10Cards />
          </div>
        </div>
      )}
    </>
  );
};

export default NewAndPopular;
