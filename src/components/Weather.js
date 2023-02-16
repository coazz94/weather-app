import styles from "../css/Weather.module.css"
import { Card } from "./Card"

export function Weather({ weatherData }) {
    return (
        <section className={styles.WeatherArea}>
            <Card
                name={weatherData.name}
                temp={weatherData.main.temp}
                humidity={weatherData.main.humidity}
                description={weatherData.weather[0].description}
                icon={weatherData.weather[0].icon}
                wind={weatherData.wind.speed}
            />
        </section>
    )
}
