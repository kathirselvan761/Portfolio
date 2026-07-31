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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <div className="logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="logo-link"
            onClick={handleLinkClick}
          >
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

        {/* Mobile Menu Toggle Button */}
        <div 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X size={28} color="var(--color-primary-light)" />
          ) : (
            <Menu size={28} color="var(--color-text-primary)" />
          )}
        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
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
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;

