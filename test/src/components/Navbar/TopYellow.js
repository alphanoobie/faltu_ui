import React from "react";
import styles from "./TopYellow.module.css";

export default function TopYellow() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          An inspiring design delivered to your inbox every morning
        </div>
        <div className={styles.subHeading}>
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </div>
        <div className={styles.showMeText}>Show me how it looks</div>
        <form className={styles.formWrapper}>
          <input className={styles.input} placeholder={"Your Email Address"}/>
          <button className={styles.registerNowButton}>Register Now</button>
        </form>
        <div className={styles.spamText}>Free - No Spam - No Data Sharing</div>
      </div>
      <div>
        <img src="./man.svg" alt=""/>
      </div>
    </div>
  );
}
