import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'C', level: 70 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 85 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Hibernate / JPA', level: 80 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman & Docker', level: 75 },
      ]
    }
  ];

  const concepts = ['OOPs', 'MVC', 'JWT', 'SDLC', 'Microservices'];

  return (
    <section id="skills" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className={styles.skillsGrid}>
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.title} 
            className={styles.skillCategory}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <div key={skill.name} className={styles.skillBarItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div 
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.conceptsContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className={styles.coreConceptsTitle}>Core Concepts</h3>
        <div className={styles.conceptsList}>
          {concepts.map((concept, index) => (
            <span key={index} className={styles.conceptBadge}>{concept}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
