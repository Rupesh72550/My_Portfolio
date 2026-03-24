import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Sales Savvy - E-Commerce',
      description: 'Full-stack e-commerce platform with robust authentication, comprehensive cart management, and seamless order processing. Features JWT-based auth and highly optimized backend performance.',
      techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT'],
      github: 'https://github.com/Rupesh72550',
      live: '#',
    },
    {
      title: 'Real-Time Language Translation',
      description: 'Advanced translation application built using pre-trained NMT models. Employs an encoder-decoder architecture to deliver high translation accuracy across multiple languages.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      github: 'https://github.com/Rupesh72550',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.title}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map(tech => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  <FaGithub /> Code
                </a>
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
