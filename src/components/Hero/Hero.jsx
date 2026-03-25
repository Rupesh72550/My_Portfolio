import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css';
import profilePic from '../../profile_pic/profilePic.jpg';

const Hero = () => {
  return (
    <section id="hero" className={`section-wrapper ${styles.heroSection}`}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.heroText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.greeting}>Hello, I'm</h2>
          <h1 className={styles.name}>Rupesh Kumar Gupta</h1>
          <div className={styles.typingContainer}>
            <TypeAnimation
              sequence={[
                'Java Full Stack Developer',
                2000,
                'React.js Enthusiast',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="h3"
              speed={50}
              className={styles.typingText}
              repeat={Infinity}
            />
          </div>
          <p className={styles.tagline}>
            Building scalable and efficient web applications using Java and modern technologies.
          </p>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/Rupesh72550" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rupesh-kumar-gupta-828432182/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaLinkedin />
            </a>
          </div>

          <div className={styles.btnGroup}>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn btn-primary">View Projects</button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              Download Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.heroImageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imagePlaceholder}>
            <img src={profilePic} alt="Rupesh Kumar Gupta" className={styles.profileImage} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
