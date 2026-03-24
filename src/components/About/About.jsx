import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className={styles.aboutContent}>
        <motion.div 
          className={styles.summary}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Professional Summary</h3>
          <p>
            Aspiring <strong>Java Full Stack Developer</strong> skilled in Java, Spring Boot, and React.js with experience in building robust REST APIs and interactive full-stack applications. I have a strong foundation in Data Structures & Algorithms and a profound passion for writing clean, maintainable code and solving complex problems.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <FaAward className={styles.highlightIcon} />
              <h4>Clean Code</h4>
              <span>Best practices & patterns</span>
            </div>
            <div className={styles.highlightCard}>
              <FaGraduationCap className={styles.highlightIcon} />
              <h4>DSA</h4>
              <span>Strong analytical skills</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.education}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Education</h3>
          <div className={styles.timeline}>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>B.E / B.Tech in Computer Science</h4>
                <h5>Your University Name</h5>
                <span className={styles.year}>Graduated / Expected</span>
                <p>Focus on software engineering, data structures, and algorithms.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>Higher Secondary Education</h4>
                <h5>Your College/School Name</h5>
                <span className={styles.year}>Year completed</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
