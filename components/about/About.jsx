import styles from "./About.module.css";
import cardList from "./card/card-list";
import numberList from "./number/number-list";
import Cards from "./card/Cards";
import Numbers from "./number/Numbers";

export default function About() {
  return (
    <div className={styles.sectionContainer} id="about">
      <div className={styles.firstContainer}>
        <h1 className={styles.aboutTitle}>Sobre nós</h1>
        <p className={styles.aboutContent}>
          Uma empresa que tem o foco no cliente, aconselhando da melhor forma e
          conseguindo os melhores resultados.
        </p>
        <Cards cardList={cardList}></Cards>
      </div>
      <div className={styles.secondContainer}>
        <Numbers numberList={numberList}></Numbers>
      </div>
    </div>
  );
}
