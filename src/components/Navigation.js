import { Link } from "react-router-dom"
import styles from "../css/Navigation.module.css"

export function Navigation() {
    return (
        <nav>
            <Link className={styles.NavElement1} to={"Profile"}>
                My Cities
            </Link>
            <Link className={styles.NavElement2} to={"/"}>
                Home
            </Link>
        </nav>
    )
}
