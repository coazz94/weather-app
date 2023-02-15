import styles from "../css/Weather.module.css"
import { Card } from "./Card"

export function Weather({ weatherData }) {
    return (
        <section className={styles.WeatherArea}>
            <Card weatherData={weatherData} />
        </section>
    )
}
