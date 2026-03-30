import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <div className="logo cursor-pointer">
          <Link to="hero" smooth={true} duration={500} offset={-80}>
            <span className="text-gradient">Portfolio.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} color="var(--color-primary-light)" /> : <Menu size={28} color="var(--color-text-primary)" />}
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open glass-panel' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
