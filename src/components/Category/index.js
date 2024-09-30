import styles from "./Category.module.css";
import videos from "../json/videos.json";

export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
  ];
  
export function FilterCategory(id) {
    return videos.filter(video => video.category === categories[id])
  }

export function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h1>{category}</h1>
            <section>
                { children }
            </section>
        </section>
    );
}