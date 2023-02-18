import { useLocation } from "react-router-dom"
import styles from "../css/Card.module.css"

export function Card(props) {
    const location = useLocation()

    console.log(location.pathname === "/Profile")

    const img = props.icon && require(`../data/${props.icon}.png`)

    return (
        <div className={styles.CardBody}>
            <div className={styles.CardLocation}>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                {props.name}
            </div>
            {location.pathname === "/Profile" ? (
                <button className={styles.CardAdd} onClick={props.deleteCity}>
                    X
                </button>
            ) : (
                <button className={styles.CardAdd} onClick={props.addToCity}>
                    Add
                </button>
            )}
            <img
                src={img}
                alt="Icon not found"
                className={styles.Weather}
            ></img>
            <div className={styles.CardTemperature}>
                {Math.floor(props.temp)}
                <span>°C</span>
            </div>
            <div className={styles.CardInfo}>{props.description}</div>
            <div className={styles.CardHumidity}>
                <i className="fa-solid fa-droplet"></i>
                {props.humidity} %
            </div>
            <div className={styles.CardWind}>
                <i className="fa-solid fa-wind"></i>
                {Math.floor(props.wind)}
                <span>Km/h</span>
            </div>
        </div>
    )
}
