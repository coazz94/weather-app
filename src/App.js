import { SearchBar } from "./components/Searchbar"
import { Weather } from "./components/Weather"
import { Navigation } from "./components/Navigation"
import { getCityInfo, getWeatherNow } from "./components/CityApi"
import "./css/styles.css"
import { useState, useEffect } from "react"

export function App() {
    const [weatherData, SetWeatherData] = useState({})
    const [showCard, setShowCard] = useState(false)

    function getCity(city) {
        getCityInfo(city).then((data) => {
            getWeatherNow(data.lat, data.lon, "day").then((data) => {
                SetWeatherData((prevData) => {
                    return { ...prevData, data }
                })
            })
        })
    }

    useEffect(() => {
        if (JSON.stringify(weatherData) !== "{}") {
            setShowCard((prevData) => true)
            console.log(weatherData)
        }
    }, [weatherData])

    return (
        <>
            <SearchBar getCity={getCity} />
            {showCard && <Weather weatherData={weatherData.data} />}
        </>
    )
}
