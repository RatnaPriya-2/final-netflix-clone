import React from "react";
import "../../components/Loading/Loading.css";

const Loading = () => {
  return (
    <div className="loading-movie-cards-container">
      <div className="loading-title"></div>
      <div className="loading-cards-list">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="loading-card">
            <div className="loading-wave"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
