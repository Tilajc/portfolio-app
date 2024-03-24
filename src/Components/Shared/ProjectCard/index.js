import React from 'react';
import styles from './projectCard.module.css';

const projectCard = ({ src, alt, description }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={alt} className={styles.img} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default projectCard;
