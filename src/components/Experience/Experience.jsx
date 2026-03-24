import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Full Stack Trainee',
      company: 'KodNest',
      period: 'Duration / Year',
      description: 'Underwent intensive training in Java, Spring Boot, React.js, and MySQL. Developed full-stack web applications and gained hands-on experience with RESTful APIs, OOP concepts, and MVC architecture.',
    },
    {
      title: 'AI & ML Intern',
      company: 'Rooman Technology',
      period: 'Duration / Year',
      description: 'Worked on Machine Learning models and Artificial Intelligence concepts. Assisted in real-world data processing, analysis, and building predictive models using Python.',
    }
  ];

  return (
    <section id="experience" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <h4 className={styles.companyName}>{exp.company}</h4>
              <span className={styles.periodBadge}>{exp.period}</span>
              <p className={styles.jobDesc}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
        {/* Center line */}
        <div className={styles.timelineLine}></div>
      </div>
    </section>
  );
};

export default Experience;
