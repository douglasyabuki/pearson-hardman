import styles from "./Dots.module.css";
import { useState } from "react";

export default function Dots({ event, status }) {
  return (
    <div className={styles.dots}>
      <span
        className={status ? styles.dotActive : styles.dot}
        onClick={event}
      ></span>
    </div>
  );
}
