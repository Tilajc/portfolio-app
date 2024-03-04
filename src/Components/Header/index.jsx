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
          className={
            window.location.pathname === '/projects' || window.location.pathname == '/'
              ? styles.selected
              : styles.a
          }
        >
          Projects
        </a>
        <a
          href="/about"
          className={window.location.pathname === '/about' ? styles.selected : styles.a}
        >
          About
        </a>
        <a
          href="/contact"
          className={window.location.pathname === '/contact' ? styles.selected : styles.a}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
