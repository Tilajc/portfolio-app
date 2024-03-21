import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Check my social media here!</p>
      <a href="https://github.com/Tilajc" target="blank">
        <img src="img/github.png" alt="Github Logo" className={styles.img} />
      </a>
      <a href="https://www.linkedin.com/in/tilatti-jc/" target="blank">
        <img src="img/linkedin.png" alt="Linkedin Logo" className={styles.img} />
      </a>
    </footer>
  );
};

export default Footer;
