import React from "react";
import facebookIcon from "../../assets/facebook_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import youtubeIcon from "../../assets/youtube_icon.png";
import "../../components/Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={instagramIcon} alt="instagramIcon" />
        <img src={twitterIcon} alt="twitterIcon" />
        <img src={youtubeIcon} alt="youtubeIcon" />
      </div>
      <ul className="footer-links">
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Legal Notices</li>
        <li>Do Not Sell or Share My Personal Information</li>
        <li>Gift Cards</li>
        <li>Netflix Shop</li>
        <li>Cookie Preferences</li>
        <li>Ad Choices</li>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
      </ul>
      <button>Service Code</button>
      <p className="copyright">&#169; 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
