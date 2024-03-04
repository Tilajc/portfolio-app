import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src="img/logo_portfolio.png" alt="Profile Photo" className={styles.logo} />
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>Juan Cruz Tilatti</h1>
          <p className={styles.role}>
            {'<'}
            <span></span>
          </p>
        </div>
      </div>
      <div className={styles.aContainer}>
        <a
          href="/projects"
          className={`${styles.a} ${window.location.pathname === '/projects' ? styles.selected : null}`}
        >
          Projects
        </a>
        <a
          href="/about"
          className={`${styles.a} ${window.location.pathname === '/about' ? styles.selected : null}`}
        >
          About Me
        </a>
        <a
          href="/contact"
          className={`${styles.a} ${window.location.pathname === '/contact' ? styles.selected : null}`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
