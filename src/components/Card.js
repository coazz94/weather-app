import styles from "../css/Card.module.css"

export function Card(props) {
    const link = `http://openweathermap.org/img/wn/${props.icon}@2x.png`

    const feather = require("feather-icons")

    console.log(feather)

    return (
        <div className={styles.CardBody}>
            <div className={styles.CardLocation}>
                <span class="fa-solid fa-user"></span>
                {props.name}
            </div>
            <button className={styles.CardAdd}>Add</button>
            <img
                src={link}
                alt="Icon not found"
                className={styles.Weather}
            ></img>
            <div className={styles.CardTemperature}>{props.temp}</div>
            <div className={styles.CardInfo}>{props.description}</div>
            <div className={styles.CardHumidity}>{props.humidity} %</div>
            <div className={styles.CardWind}>{props.wind}</div>
        </div>
    )
}
