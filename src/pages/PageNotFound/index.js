import styles from "./PageNotFound.module.css";
import error404 from "./images/computer.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function PageNotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h1>Ops! Conteúdo não localizado</h1>
                <img src={error404} alt="imagem ilustrativa" />
                <h2>Erro 404</h2>
            </section>
            <Footer />
        </>
    );
}