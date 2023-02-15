import { useState } from "react"
import styles from "../css/Searchbar.module.css"

export function SearchBar(props) {
    const [city, setCity] = useState("")

    function handleInput(event) {
        setCity((prevData) => event.target.value)
    }

    function handleEnter(event) {
        if (event.key === "Enter") props.getCity(city)
    }

    return (
        <section className={styles.SearchSection}>
            <div className={styles.SearchBar}>
                <input
                    className={styles.InputBar}
                    type="text"
                    placeholder="City"
                    onChange={handleInput}
                    onKeyDown={handleEnter}
                ></input>
                <button
                    className={styles.btnSearch}
                    onClick={() => props.getCity(city)}
                >
                    Search
                </button>
            </div>
        </section>
    )
}
