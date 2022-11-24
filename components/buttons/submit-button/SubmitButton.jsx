import styles from "./SubmitButton.module.css";

export default function SubmitButton() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.submitButton}>Enviar</button>
    </div>
  );
}
