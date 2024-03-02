import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./css/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">Learn Sync</h2>
          <p>
            Learn Sync is a federated adaptive edtech platform dedicated to
            providing personalized learning experiences.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> +91 123654789
            </span>
            <span>
              <i className="fas fa-envelope"></i> info@learnsync.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Learn Sync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
