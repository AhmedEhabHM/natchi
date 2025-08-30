/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/img/logo.png"
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          {/* Logo and About Section */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <img
                width={240}
                height={120}
                src={logo}
                alt="Natchi Beach Club Logo"
              />
            </div>
            <p className="footer-about">
              Natchi Beach Club Where summer comes to life! Escape to a vibrant
              oasis on the shores of the Red Sea, where luxury, music, and
              adventure meet under the sun.
            </p>
            <div className="social-style">
              <a
                target="_blank"
                rel="nofollow noreferrer"
                href="https://www.facebook.com/"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a target="_blank" rel="nofollow noreferrer" href="https://www.twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a
                target="_blank"
                rel="nofollow noreferrer"
                href="https://www.instagram.com/natchibeachclub?igsh=MWpmenVuazJ2bTk0aw=="
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                target="_blank"
                rel="nofollow noreferrer"
                href="https://www.pinterest.com/"
              >
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
          {/* Useful Links Section */}
          <div className="footer-section">
            <h4 className="widget_title">Useful Links</h4>
            <div className="footer-menu">
              <ul>
                <li>
                  <a rel="nofollow" href="https://natchibaech.com">
                    <i className="fas fa-angle-right" />
                    Home
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="https://natchibaech.com/booking/">
                    <i className="fas fa-angle-right" />
                    Booking
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="https://natchibaech.com/about/">
                    <i className="fas fa-angle-right" />
                    About
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="https://natchibaech.com/membership/">
                    <i className="fas fa-angle-right" />
                    Membership
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h4 className="widget_title">Subscribe Now</h4>
            <p>Subscribe Our Newsletter For Getting Quick Updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required=""
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="copyright-section">
          <div className="copyright-inner">
            <div className="copyright-text">
              <p>
                Copyright <i className="fas fa-copyright" /> 2025
                <a href="https://natchibaech.com/">Natchi Beach</a>
                <a href="https://www.instagram.com/p/DJtvIK5ox4q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                  .
                </a>
              </p>
              <p className="copyright-text">
                All Rights Reserved By{" "}
                <a href="https://natchibaech.com/">Natchi Beach</a>
              </p>
            </div>
            <div className="copyright-menu">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
