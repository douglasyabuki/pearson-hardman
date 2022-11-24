import styles from "./Cards.module.css";

export default function Cards({ cardList }) {
  const cards = cardList.map((card) => (
    <div className={styles.cardContainer} key={card.id}>
      <i class={card.iconClass}></i>
      <h4 className={styles.cardTitle}>{card.title}</h4>
      <p className={styles.cardContent}>{card.content}</p>
    </div>
  ));

  return <div className={styles.cardsContainer}>{cards}</div>;
}
