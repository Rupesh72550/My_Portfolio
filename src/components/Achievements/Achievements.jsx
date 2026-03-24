import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievementsList = [
    {
      icon: <FaCertificate />,
      title: 'Research Paper Published',
      description: 'Published a research paper in IRJMETS (International Research Journal of Modernization in Engineering Technology and Science).',
    },
    {
      icon: <FaTrophy />,
      title: 'KSCST Project Selection',
      description: 'Project got selected and funded under the KSCST (Karnataka State Council for Science and Technology) student project program.',
    }
  ];

  return (
    <section id="achievements" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      <div className={styles.achievementsGrid}>
        {achievementsList.map((item, index) => (
          <motion.div 
            key={index}
            className={styles.achievementCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
