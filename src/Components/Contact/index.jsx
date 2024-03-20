import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const copyEmailToClipboard = () => {
    const emailElement = document.getElementById('myEmail');
    const emailText = emailElement.innerText;
    const textarea = document.createElement('textarea');

    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Email copied correctly!');
  };

  return (
    <section className={styles.section}>
      <p>Copy my email here!</p>
      <div className={styles.emailContainer}>
        <p id="myEmail">jctilatti@gmail.com</p>
        <img src="img/copy.png" alt="copy" className={styles.copy} onClick={copyEmailToClipboard} />
      </div>
      <p>or send me an email by the form</p>
      <form action="submit" className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.labInpContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.labInpContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <label htmlFor="message" className={styles.message}>
            Message
          </label>
          <textarea id="message" className={styles.textarea}></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
