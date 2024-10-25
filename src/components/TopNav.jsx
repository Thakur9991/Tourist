import React from "react";
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <Link to="/">
            <h1 className="logo">Tourest</h1>
          </Link>

          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn
            aria-label="Toggle Menu"
          >
            <ion-icon name="menu-outline" className="open"></ion-icon>
            <ion-icon name="close-outline" className="close"></ion-icon>
          </button>

          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tours" className="navbar-link">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="navbar-link">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="navbar-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-link">
                  Contact Us
                </Link>
              </li>
            </ul>

            <Link to="/booking" className="btn btn-secondary">
              Booking Now
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
