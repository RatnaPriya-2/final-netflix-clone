import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 913);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 913);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>

          {isMobile ? (
            <div
              className={`short-nav-links ${show ? "show" : ""}`}
              onClick={() => setShow(!show)}
            >
              <div className="main-link">
                <p>Browse</p>
                <img className="caret-icon" src={caretIcon} alt="caret-icon" />
              </div>
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
          ) : (
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
          )}
        </div>
        <div className="right-section">
          <img
            src={searchIcon}
            alt="search-icon"
            style={{ display: isMobile ? "none" : "block" }}
          />
          <p style={{ display: isMobile ? "none" : "block" }}>
            <Link to="/children">Children</Link>
          </p>
          <img
            src={bellIcon}
            alt="bell-icon"
            style={{ display: isMobile ? "none" : "block" }}
          />
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
