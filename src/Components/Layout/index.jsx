import React from 'react';
import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';
import styles from './layout.module.css';

function Layout() {
  let currentScreen;
  switch (window.location.pathname) {
    case '/contact':
      currentScreen = <Contact />;
      break;
    case '/about':
      currentScreen = <About />;
      break;
    case '/projects':
      currentScreen = <Projects />;
      break;
    default:
      currentScreen = <Projects />;
      break;
  }

  return <main className={styles.main}>{currentScreen}</main>;
}

export default Layout;
