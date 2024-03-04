import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.infoContainer}>
          <img src="img/logo_portfolio.png" alt="Profile Photo" className={styles.logo} />
          <h1 className={styles.name}>Juan Cruz Tilatti</h1>
        </div>
        <p className={styles.role}>
          {'<'}
          <span></span>
        </p>
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
          {window.location.pathname == '/projects' || window.location.pathname == '/'
            ? '{Projects}'
            : 'Projects'}
        </a>
        <a
          href="/about"
          className={window.location.pathname === '/about' ? styles.selected : styles.a}
        >
          {window.location.pathname == '/about' ? '{About}' : 'About'}
        </a>
        <a
          href="/contact"
          className={window.location.pathname === '/contact' ? styles.selected : styles.a}
        >
          {window.location.pathname == '/contact' ? '{Contact}' : 'Contact'}
        </a>
      </div>
    </header>
  );
};

export default Header;
