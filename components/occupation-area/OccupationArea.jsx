import MoreButton from "../buttons/more-button/MoreButton";
import styles from "./OccupationArea.module.css";
import Image from "next/image";

export default function OccupationArea() {
  return (
    <div className={styles.occupationAreaContainer} id="expertise-areas">
      <div className={styles.occupationAreaText}>
        <p className={styles.occupationAreaTitle}>Áreas de atuação</p>
        <h3 className={styles.occupationAreaInfo}>
          Nossos especialistas podem ajudar você em Direito Civil, Ambiental e
          Empresarial.
        </h3>
        <MoreButton></MoreButton>
      </div>
      <div className={styles.imageContainer}>
        <i class="bi bi-people"></i>
        <Image
          src="/employees_banner.jpg"
          alt="Pearson Hardman Lawyers"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
}
