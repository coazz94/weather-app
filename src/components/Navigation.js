import { Link } from "react-router-dom"
import styles from "../css/Navigation.module.css"

export function Navigation() {
    return (
        <>
            <Link className={styles.NavElement} to={"Profile"}>
                Test
            </Link>
        </>
    )
}
