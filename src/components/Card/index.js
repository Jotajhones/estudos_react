import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import iconUnfavorite from "./assets/heart.png";
import iconFavorite from "./assets/heart(1).png"

export function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}className={styles.capa}>
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" />
            </Link>
            <figure>
                <img src={iconUnfavorite}/>
            </figure>
        </section>
    );
}
// JSxV0ljL1rM