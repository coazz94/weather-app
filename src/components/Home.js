import { SearchBar } from "./Searchbar"
import { Weather } from "./Weather"
import { getCityInfo, getWeatherNow } from "./CityApi"
import "../css/Home.module.css"
import styles from "../css/Home.module.css"
import { useState, useEffect } from "react"

export function Home() {
    const [weatherData, SetWeatherData] = useState({})
    const [showCard, setShowCard] = useState(false)
    const [userWeatherData, setUserWeatherData] = useState([])

    function getCity(city) {
        getCityInfo(city).then((data) => {
            getWeatherNow(data.lat, data.lon, "day").then((data) => {
                SetWeatherData((prevData) => {
                    return { ...prevData, data }
                })
            })
        })
    }

    function checkDuplicate(city) {
        const searched = userWeatherData.filter((obj) => {
            return city === obj.data.name
        })
        return searched.length > 0 ? true : false
    }

    function addToCity() {
        if (checkDuplicate(weatherData.data.name)) {
            alert("city already in your Cities")
            return
        }
        setUserWeatherData((prevData) => [...prevData, weatherData])
    }

    useEffect(() => {
        if (JSON.stringify(weatherData) !== "{}") {
            setShowCard(() => true)
        }
    }, [weatherData])

    useEffect(() => {
        const localData = localStorage.getItem("userCities")

        // If first load ever, create a local empty local Storage
        localData === null && localStorage.setItem("userCities", "")

        // If using activly site and adding something
        if (userWeatherData.length > 0) {
            localStorage.setItem("userCities", JSON.stringify(userWeatherData))
        }

        // first load and Data is in local Storage
        if (localData.length > 0 && userWeatherData.length === 0) {
            setUserWeatherData(() => JSON.parse(localData))
        }
    }, [userWeatherData])

    return (
        <>
            <SearchBar getCity={getCity} />
            {showCard && (
                <section className={styles.WeatherArea}>
                    <Weather
                        weatherData={weatherData.data}
                        addToCity={addToCity}
                    />
                </section>
            )}
        </>
    )
}
