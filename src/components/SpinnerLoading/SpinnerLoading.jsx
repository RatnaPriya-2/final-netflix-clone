import React from "react";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const SpinnerLoading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={netflix_spinner}
        alt="Loading"
        style={{
          width: "80px",
          height: "80px",
        }}
      />
    </div>
  );
};

export default SpinnerLoading;
