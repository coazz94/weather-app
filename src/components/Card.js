import styles from "../css/Card.module.css"

export function Card() {
    return (
        <div className={styles.CardBody}>
            <div className={styles.CardLocation}>City</div>
            <button className={styles.CardAdd}>City</button>
            <img src="" alt="" className={styles.Weather}></img>
            <div className={styles.CardTemperature}>Temp</div>
            <div className={styles.CardInfo}>Info</div>
            <div className={styles.CardHumidity}>Humidity</div>
            <div className={styles.CardWind}>Wind</div>
        </div>
    )
}
