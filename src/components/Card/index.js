import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" />
            </Link>
        </section>
    );
}
// JSxV0ljL1rM