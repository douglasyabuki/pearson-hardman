import styles from "./Testimonials.module.css";
import Image from "next/image";
import recomendationList from "./recomendation-list/recomendation-list";
import Recomendations from "./recomendation-list/Recomendations";

export default function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.firstContainer}>
        <h3 className={styles.title}>Depoimentos de clientes</h3>
        <Recomendations recomendationData={recomendationList}></Recomendations>
      </div>
      <div className={styles.secondContainer}>
        <i class="bi bi-quote"></i>
        <Image src="/court.jpg" alt="Lawyer in court" layout="fill"></Image>
      </div>
    </div>
  );
}
