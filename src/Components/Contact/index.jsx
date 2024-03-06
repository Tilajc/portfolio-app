import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const copyEmailToClipboard = () => {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.innerText;
    const textarea = document.createElement('textarea');

    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('¡Email copiado al portapapeles!');
  };

  return (
    <section className={styles.section}>
      <p>email:</p>
      <div className={styles.emailContainer}>
        <p id="email">jctilatti@gmail.com</p>
        <img src="img/copy.png" alt="copy" className={styles.copy} onClick={copyEmailToClipboard} />
      </div>
      {/* <form action="submit">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>
      </form> */}
    </section>
  );
};

export default Contact;
