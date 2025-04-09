import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import caretIcon from "../../assets/caret_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import { useGlobalContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import { signOutFromSite } from "../../Firebase/Firebase";

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
    <>
      <div className="navbar" ref={navRef}>
        <div className="left-section">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/new&popular">New & Popular</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
            <li>
              <Link to="/browsebylanguages">Browse by Languages</Link>
            </li>
          </ul>
        </div>
        <div className="right-section">
          <img src={searchIcon} alt="search-icon" />
          <p>
            <Link to="/children">Children</Link>
          </p>
          <img src={bellIcon} alt="bell-icon" />
          <div className="profile-cluster">
            <img src={profileIcon} alt="profile-icon" />
            <img src={caretIcon} alt="caret-icon" />
            <p className="dropdown" onClick={handleSignOut}>
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
