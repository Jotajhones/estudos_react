import styles from "./Favorites.module.css";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Favorites() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favoritos}>
                    <h2>Meus Favoritos</h2>
                </section>
            </Container>
            <Footer />
        </>
    );
}