import styles from './Recomendations.module.css'
import Image from 'next/image'

export default function Recomendations({ recomendationData }){

    const recomendations = recomendationData.map((recomendation) => (
        <div className={styles.cardContainer} key={recomendation.id}>
          <div className={styles.cardImageContainer}>
            <Image
              src={recomendation.imgUrl}
              alt={recomendation.imgAlt}
              layout="fill"
            ></Image>
          </div>
          <div className={styles.cardInfoContainer}>
            <h3 className={styles.cardAuthor}>{recomendation.authorName}</h3>
            <h3 className={styles.cardAuthorJob}>{recomendation.authorJob}</h3>
            <p className={styles.cardContent}>{recomendation.content}</p>
          </div>
        </div>
      ));

    return(
        <div className={styles.recomendationsContainer}>{ recomendations }</div>
    )
}