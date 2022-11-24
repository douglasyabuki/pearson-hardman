import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <h2 className={styles.logo}>Pearson Hardman</h2>
    </div>
  );
}
