import styles from "./Services.module.css";
import Image from "next/image";

export default function Services({ serviceData, selectedId }) {
  const services = serviceData.map((service) => (
    <div className={styles.serviceCard} key={service.id}>
      <div className={styles.serviceCardImage}>
        <i
          className={service.iconClass}
          role="img"
          class={service.iconClass}
        ></i>
        <Image src={service.imgUrl} alt={service.imgAlt} layout="fill"></Image>
      </div>
      <div className={styles.serviceCardInfo}>
        <h4 className={styles.serviceCardTitle}>{service.title}</h4>
        <p className={styles.serviceCardContent}>{service.content}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.servicesContainer}>
      {selectedId>-1 ? services[selectedId] : services}
    </div>
  );
}
