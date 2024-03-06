import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>You can check my social media here!</p>
      <img src="img/github.png" alt="Github Logo" className={styles.img} />
      <img src="img/linkedin.png" alt="Linkedin Logo" className={styles.img} />
    </footer>
  );
};

export default Footer;
