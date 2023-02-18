import { useEffect, useState } from "react"
import { Card } from "./Card"
import styles from "../css/Profile.module.css"

export function Profile() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        const cities = localStorage.getItem("userCities")

        cities.length > 0 && setCities((prevData) => JSON.parse(cities))
    }, [])

    function deleteCity(city) {
        const newArray = cities.filter((item) => item.data.name !== city)
        setCities(() => newArray)
        localStorage.setItem("userCities", JSON.stringify(newArray))
    }

    const arr = cities.map((city, index) => {
        console.log(city.data.name)

        return (
            <Card
                name={city.data.name}
                temp={city.data.main.temp}
                humidity={city.data.main.humidity}
                description={city.data.weather[0].description}
                icon={city.data.weather[0].icon}
                wind={city.data.wind.speed}
                key={index}
                deleteCity={() => deleteCity(city.data.name)}
            />
        )
    })

    return (
        <>
            <section>
                <div className={styles.test}>{arr}</div>
            </section>
        </>
    )
}
