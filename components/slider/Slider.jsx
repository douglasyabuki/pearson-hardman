import styles from './Slider.module.css'

export default function Slider({event1, event2}){

    return (
        <div className={styles.container}>
            <div className={styles.previousButton} onClick={event1}><i class="bi bi-arrow-left"></i></div>
            <div className={styles.nextButton} onClick={event2}><i class="bi bi-arrow-right"></i></div>
        </div>
    )
}