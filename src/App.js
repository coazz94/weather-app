import { SearchBar } from "./components/Searchbar"
import { Weather } from "./components/Weather"
import { getCityInfo, getWeatherNow } from "./components/CityApi"
import "./css/styles.css"
import { useState } from "react"

export function App() {
    const [weatherData, SetWeatherData] = useState({})

    function getCity(city) {
        getCityInfo(city).then((data) => {
            getWeatherNow(data.lat, data.lon, "day").then((data) => {
                SetWeatherData((prevData) => {
                    return { ...prevData, data }
                })
            })
        })
    }

    return (
        <>
            <SearchBar getCity={getCity} />
            <Weather weatherData={weatherData} />
        </>
    )
}
