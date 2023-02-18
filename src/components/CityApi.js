const apiKey = "b4e1871079ad0d513a2ab9e3069eb9d0"
const createCordLink = (cityName) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
const createDayLink = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
const createFourLink = (lat, lon) =>
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
// const createLongLink = (lat, lon) => `units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getWeatherNow(latitude, longitude, type) {
    let link = ""

    if (type === "day") {
        link = createDayLink(latitude, longitude)
    } else if (type === "four") {
        link = createFourLink(latitude, longitude)
    }

    const apiData = await fetch(link)
    const response = await apiData.json()
    return response
}

async function getCityInfo(cityName) {
    try {
        const link = createCordLink(cityName)
        const apiData = await fetch(link)
        const response = await apiData.json()

        return {
            lon: response[0].lon,
            lat: response[0].lat,
            name: response[0].name,
        }
    } catch (err) {
        alert("The City could not be found")
    }
}

export { getCityInfo, getWeatherNow }
