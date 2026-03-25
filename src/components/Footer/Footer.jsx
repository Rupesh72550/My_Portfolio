import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3>Rupesh<span>.</span></h3>
            <p>Java Full Stack Developer creating elegant, efficient, and scalable web solutions.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSocial}>
            <h4>Follow Me</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com/Rupesh72550" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-kumar-gupta-828432182/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {year} Rupesh Kumar Gupta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
