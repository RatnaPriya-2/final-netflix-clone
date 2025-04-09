import React from "react";
import "../StackedNavbar/StackedNavbar.css";
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOutFromSite } from "../../Firebase/Firebase";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
  const { navRef } = useGlobalContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutFromSite();
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      setTimeout(() => navigate("/home"), 1000);
    }
  };

  return (
    <div className="stacked-navbar" ref={navRef}>
      {/* Top Row */}
      <div className="navbar-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
        <div className="profile-cluster">
          <img src={profileIcon} alt="Profile" />

          <img className="caret-icon" src={caretIcon} alt="Caret" />
          <p className="dropdown" onClick={handleSignOut}>
            Sign out of Netflix
          </p>
        </div>
      </div>

      {/* Bottom Row */}
    </div>
  );
};

export default Navbar;
