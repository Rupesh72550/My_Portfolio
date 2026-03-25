import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="hero" smooth={true} duration={500} offset={-80} className={styles.logoText}>
            Rupesh<span className={styles.accent}>.</span>
          </Link>
        </div>

        <div className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link
                  activeClass={styles.activeLink}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={styles.navLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles.themeToggleBtn} onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
          </button>
        </div>

        <div className={styles.mobileIcons}>
          <button className={styles.themeToggleBtnMobile} onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
          </button>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
