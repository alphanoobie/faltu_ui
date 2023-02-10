import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCol1}>
        <p>Prompt Generator</p>
        <p>Dweep Daily</p>
        <p>All Contributors</p>
        <p>Your data on Dweep.io</p>
        <p>Contribute to Dweep</p>
      </div>
      <div className={styles.footerCol2}>
        <p>Dweep.io</p>
        <p>Made with love in India</p>
        <img src="./linkedin.svg" alt="" />
        <img src="./insta.svg" alt="" />
        <p>hello@dweep.io</p>
      </div>
    </footer>
  );
}
