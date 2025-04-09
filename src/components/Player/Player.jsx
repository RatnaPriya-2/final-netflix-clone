import React, { useEffect, useState } from "react";
import "../Player/Player.css";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ added loading state
  const { media_type, id } = useParams();

  const navigate = useNavigate();

  const fetchTrailer = async (id) => {
    setLoading(true); // ✅ start loading
    try {
      const response = await fetch(
        `/.netlify/functions/tmdb?endpoint=${encodeURIComponent(
          `${media_type}/${id}/videos`
        )}`
      );

      const data = await response.json();
      const trailerData = data.results.find(
        (trailer) => trailer.type === "Trailer" && trailer.site === "YouTube"
      );

      setTrailer(trailerData || null);
    } catch (error) {
      console.error("Error fetching trailer:", error);
      setTrailer(null);
    }
    setLoading(false); // ✅ stop loading
  };

  useEffect(() => {
    fetchTrailer(id);
  }, [id]);

  return (
    <div className="player-container">
      <div className="back-icon" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      {loading ? (
        <p style={{ fontSize: "26px", marginTop: "100px" }}>
          Loading trailer...
        </p>
      ) : trailer && trailer.key ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            width="100%"
            height="90%"
            title="trailer"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{trailer.name}</p>
            <p>{trailer.type}</p>
          </div>
        </>
      ) : (
        <p style={{ fontSize: "26px", marginTop: "100px" }}>
          No trailer found...
        </p>
      )}
    </div>
  );
};

export default Player;
