import React, { useState } from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copiedCount, setCopiedCount] = useState(0);
  const [timeOutID, setTimeoutID] = useState(null);

  const copyEmailToClipboard = () => {
    const emailElement = document.getElementById('myEmail');
    const emailText = emailElement.innerText;
    const textarea = document.createElement('textarea');

    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopied(true);
    setCopiedCount(copiedCount + 1);

    if (timeOutID) {
      clearTimeout(timeOutID);
    }

    const id = setTimeout(finishCopied, 3000);
    setTimeoutID(id);
  };

  const finishCopied = () => {
    setCopied(false);
    setCopiedCount(0);
  };

  return (
    <section className={styles.section}>
      <p>Copy my email here!</p>
      <div className={styles.emailCopyContainer}>
        <button className={styles.emailButton} onClick={copyEmailToClipboard}>
          <p id="myEmail">jctilatti@gmail.com</p>
          <img src="img/copy.png" alt="copy" className={styles.copy} />
        </button>
        <p className={copied && copiedCount === 1 ? styles.emailCopied : styles.none}>Copied!</p>
        <p className={copied && copiedCount === 2 ? styles.emailCopied : styles.none}>
          Double Copied!
        </p>
        <p className={copied && copiedCount === 3 ? styles.emailCopied : styles.none}>
          Triple Copied!
        </p>
        <p
          className={
            copied && copiedCount > 3 ? `${styles.emailCopied} ${styles.vibrate}` : styles.none
          }
        >
          SUPER COPIED!
        </p>
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
