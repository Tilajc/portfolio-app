import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>About Me</h2>
      <div className={styles.textContainer}>
        <p>
          Hello! My name is Juan Cruz, I am a system ingenieer student. Working as a freelance
          fullstack developer.
        </p>
        <p>
          I love coding &#x1F4BB;, playing video games &#x1F3AE;, swimming &#x1F3CA;, and cats
          &#x1F431;.
        </p>
        <p>
          Currently, I am learning unity, cybersecurity, and of course open to learn new
          technologies!
        </p>
        <p>Thank you for checking out my portfolio!</p>
      </div>
    </section>
  );
};

export default About;
