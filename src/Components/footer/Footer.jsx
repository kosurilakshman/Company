import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import "../footer/Footer.css";
import logo from "../../assets/footer-logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Sanjit Tech Solutions Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="footer-links" aria-label="Footer Navigation">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/" title="Go to Home Page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" title="Learn About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" title="Contact Us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              {/* <li>
                <Link to="/blog" title="Read Our Blog">
                  Blog
                </Link>
              </li> */}
              <li>
              <HashLink smooth to="/#faqs" title="Go to FAQs section on Home">
                  FAQs
              </HashLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Subscription Section */}
        <section
          className="footer-subscribe"
          aria-label="Subscribe to Newsletter"
        >
          <h3>Stay Ahead in Tech!</h3>
          <p>Subscribe for Exclusive Insights & Updates.</p>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email address"
            />
            <button type="submit">Subscribe</button>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Facebook"
              >
                <FaFacebook aria-label="Facebook" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
                  <FaSquareTwitter aria-label="Twitter" />
                </a> */}
              <a
                href="https://www.linkedin.com/company/sanjit-tech-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with us on LinkedIn"
              >
                <FaLinkedin aria-label="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/sanjittechsolutions?igsh=MW9ia2F2YzcwYWZ5dA=="
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <FaSquareInstagram aria-label="Instagram" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sanjit Tech Solutions. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
