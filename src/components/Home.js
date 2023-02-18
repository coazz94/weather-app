import { SearchBar } from "./Searchbar"
import { Weather } from "./Weather"
import { getCityInfo, getWeatherNow } from "./CityApi"
import "../css/styles.css"
import { useState, useEffect } from "react"

export function Home(props) {
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

    return (
        <>
            <button onClick={() => console.log(userWeatherData)}>
                lod State
            </button>
            <SearchBar getCity={getCity} />
            {showCard && (
                <Weather weatherData={weatherData.data} addToCity={addToCity} />
            )}
        </>
    )
}
