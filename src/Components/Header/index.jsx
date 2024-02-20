import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <img src="img/logo_portfolio.png" alt="Profile Photo" className={styles.photo} />
        <h1 className={styles.name}>Juan Cruz Tilatti</h1>
        <p className={styles.role}>
          {'<'}
          <span></span>
        </p>
      </div>
      <div className={styles.aContainer}>
        <a href="/projects" className={styles.a}>
          Projects
        </a>
        <a href="/about" className={styles.a}>
          About Me
        </a>
        <a href="/contact" className={styles.a}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
