import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          {/* <div className="footer-logo">
            <span className="text-gradient">Portfolio.</span>
            <p className="footer-tagline">Building the web, one component at a time.</p>
          </div> */}
          
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} <span className="text-gradient">KATHIRSELVAN V</span>. All Rights Reserved.
          </p>
          
          <Link to="hero" smooth={true} duration={800} offset={-80}>
            <button className="back-to-top" aria-label="Back to top">
              <ArrowUp size={20} />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
