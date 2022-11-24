import styles from "./Numbers.module.css";

export default function Numbers({ numberList }) {
  const numbers = numberList.map((number) => (
    <div className={styles.numberContainer} key={number.id}>
      <div className={styles.iconContainer}>
        <i class={number.iconClass}></i>
      </div>
      <p className={styles.numberValue}>{number.value}</p>
      <h5 className={styles.numberTitle}>{number.title}</h5>
    </div>
  ));

  return <div className={styles.numbersContainer}>{numbers}</div>;
}
