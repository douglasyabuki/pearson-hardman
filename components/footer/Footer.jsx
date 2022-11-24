import styles from "./Footer.module.css";

export default function Footer() {
  const informations = [
    {
      id: 0,
      icon: "bi bi-geo-alt",
      content: "Rua dos Advogados, 1415",
    },
    {
      id: 1,
      icon: "bi bi-telephone",
      content: "(99) 9999-9999",
    },
    {
      id: 2,
      icon: "bi bi-envelope",
      content: "contato@pearsonhardman.com",
    },
  ];

  const infoList = informations.map((information) => (
    <div key={information.id}>
      <p className={styles.informationContent}>{information.content}</p>
    </div>
  ));

  return (
    <div className={styles.footerContainer}>
      <div className={styles.brand}>
        <h2 className={styles.title}>Pearson Hardman</h2>
        <p className={styles.subtitle}>O advogado certo para a sua empresa</p>
      </div>
      <div className={styles.informationsContainer}>{infoList}</div>
    </div>
  );
}
