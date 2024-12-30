import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
import background from "../assets/background.png"; 

function HomePage() {
  return (
    <div
      className="homepage-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/dataset" className="navbar-link">Dataset</Link>
        <Link to="/about" className="navbar-link">About Us</Link>
        <Link to="/forecast" className="navbar-button">Forecast</Link>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="logo-title-container">
          <img src={logo} alt="MeWind Logo" className="logo" />
          <h1 className="title">MeWind</h1>
        </div>
        <h2 className="subtitle">
          FORECAST DAILY AVERAGE WIND SPEED IN TANJUNGPINANG WITH US, NOW!
        </h2>
        <p className="description">
          Discover the Power of Dual-Algorithm for Wind Speed Prediction
        </p>
        <Link to="/forecast" className="main-button">
          Forecast now!
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; 2024. Developed passionately by <span className="footer-highlight">WindScholars</span>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
