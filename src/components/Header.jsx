/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/img/logo.png";
import locationIcon from "../assets/img/loc-icon-1.svg";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        {/* Subnav */}
        <div className="subnav d-flex align-items-center">
          <div className="subnav-content d-flex">
            <span>
              <i className="fa-solid fa-envelope" />
              <a className="email" href="mailto:info@natchibaech.com">
                info@natchibaech.com
              </a>
            </span>

            <span>
              <i className="fa-solid fa-phone" />
              <a target="_blank" href="https://wa.me/+966563069010">
                +096656306910
              </a>
            </span>
          </div>

          <div className="subnav-translate d-flex align-items-center">
            <div id="google_translate_element"></div>
            <i class="fa-solid fa-globe fa-xl"></i>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar mainnav">
          <div className="nav-container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width={250} className="me-2" />
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/membership"
                    onClick={closeMenu}
                  >
                    Membership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/booking" onClick={closeMenu}>
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="desktop-address">
                <img src={locationIcon} />
                <a
                  target="_blank"
                  className="addressURL"
                  href="https://maps.app.goo.gl/W6H8GVoEPEjKMmzA6"
                >
                  {" "}
                  Al-Malik As-Salih Ayyub Ibn Al-Kamil, Al-Muruj District,
                  Jeddah 23842,Saudi
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </nav>

        {/* Mobile Overlay and Sidebar */}
        <div
          className={`mobile-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>
        <div className={`mobile-sidebar ${isMenuOpen ? "active" : ""}`}>
          <button
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <i>
              <img src={logo} alt="logo" />
            </i>
          </button>

          <ul className="mobile-nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/membership" onClick={closeMenu}>
                Membership
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking" onClick={closeMenu}>
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-subnav-content">
            <span>
              <i className="fa-solid fa-envelope" />
              <a href="mailto:info@natchibaech.com">info@natchibaech.com</a>
            </span>
            <span>
              <i className="fa-solid fa-phone" /> 096656306910
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
