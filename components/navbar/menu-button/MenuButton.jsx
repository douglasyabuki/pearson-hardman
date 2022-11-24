import styles from "./MenuButton.module.css";

export default function MenuButton({ event }) {
  return (
    <div className={styles.menuButtonContainer}>
      <button className={styles.menuButton} onClick={event}></button>
    </div>
  );
}
