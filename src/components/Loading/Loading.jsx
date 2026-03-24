import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <span className={styles.letter}>R</span>
        <span className={styles.letter}>K</span>
        <span className={styles.letter}>G</span>
      </div>
    </div>
  );
};

export default Loading;
