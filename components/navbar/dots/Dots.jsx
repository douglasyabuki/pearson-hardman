import styles from "./Dots.module.css";

export default function Dots({ event }) {
  return (
    <div className={styles.dots}>
      <span className={styles.dot} onClick={event}></span>
    </div>
  );
}
