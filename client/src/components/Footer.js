import React, { useState, useEffect } from "react";
import "./footer1.css"; // Import the CSS file
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsFooterVisible(scrollPosition + clientHeight >= pageHeight);
      console.log("isFooterVisible:", isFooterVisible);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-body">
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <h2>Leven Work</h2>
            <br />
            <p className="footer-text">
              Great job reaching the end of the page! You've just taken another
              big step towards unlocking the full potential of your business.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-contact-info">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <ion-icon name="call-outline"></ion-icon>
                  <a href="tel:+918120665322">Phone: +918120665322</a>
                </li>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  <a href="mailto:info@levenwork.online">
                    Email: info@levenwork.online
                  </a>
                  <br />
                  <a href="mailto:hr@levenwork.online">hr@levenwork.online</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/home" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="footer-link">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/clients" className="footer-link">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-social-icons-container">
            <div className="footer-social-icons">
              <h3 className="mb-0 b-0">Social Media</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564663717373"
                    title="Facebook"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/LevenWork?t=nguxeIhV1DyPalwSXGQJOQ&s=08"
                    title="Twitter"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/leven_work?utm_source=qr&igsh=MXF6Y3BrbGR6azczag=="
                    title="Instagram"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@levenwork?si=nRONTqs8G8mtl0mH"
                    title="Youtube"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/levenwork/"
                    title="LinkedIn"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a href="#" className="footer-back-to-top" onClick={backToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
          <br />
        </a>
        <a
          className="bg-red-600 footer-whatsapp"
          href="https://api.whatsapp.com/send?phone=918120665322&text=Hello"
        >
          <ion-icon name="logo-whatsapp" className="object-contain"></ion-icon>
        </a>
        <a className="bg-red-600 footer-call" href="tel:+918120665322">
          <ion-icon name="call-outline" className="object-contain"></ion-icon>
        </a>
        <hr className="footer-hr" />
        <div className="footer-copyright">
          &copy; 2024 LEVEN WORK. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
