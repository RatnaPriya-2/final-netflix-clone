import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import caretIcon from "../../assets/caret_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
  const { navRef } = useGlobalContext();

  return (
    <>
      <div className="navbar" ref={navRef}>
        <div className="left-section">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
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
