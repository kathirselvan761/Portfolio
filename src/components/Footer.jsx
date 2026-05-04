import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <footer className="footer">
      {/* Background glow effects */}
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>
      
      <div className="container footer-container">
        <div className="footer-content">
          
          {/* Column 1: Logo and About */}
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <span className="text-gradient">Portfolio.</span>
            </div>
            <p className="footer-tagline">
              A passionate developer building scalable and modern web experiences. 
              Let's create something amazing together.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:contact@kathirselvan.com">contact@kathirselvan.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="footer-column footer-social">
            <h3 className="footer-heading">Connect With Me</h3>
            <p className="social-tagline">Follow my journey across social media platforms.</p>
            <div className="footer-socials-grid">
              <a href="https://www.linkedin.com/in/kathirselvan-v-548811314/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/kathirselvan761" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://x.com/KathirAchu" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com/mr.choco_late_boy" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} <span className="text-gradient" style={{fontWeight: 'bold'}}>KATHIRSELVAN V</span>. All Rights Reserved.
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
