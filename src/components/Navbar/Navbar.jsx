import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import caretIcon from "../../assets/caret_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navRef } = useGlobalContext();

  return (
    <>
      <div className="navbar" ref={navRef}>
        <div className="left-section">
          <img src={logo} alt="logo" />
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
              <Link to="browsebylanguages">Browse by Languages</Link>
            </li>
          </ul>
        </div>
        <div className="right-section">
          <img src={searchIcon} alt="search-icon" />
          <p>Children</p>
          <img src={bellIcon} alt="bell-icon" />
          <div className="profile-cluster">
            <img src={profileIcon} alt="profile-icon" />
            <img src={caretIcon} alt="caret-icon" />
            <p className="dropdown">Sign in to Netflix</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
