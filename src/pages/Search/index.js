import { Banner } from "../../components/Banner";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { VideoList } from "../../components/VideoList";
import styles from "./Search.module.css";
import videos from "../../components/json/videos.json";
import { SearchVideoList } from "../../components/SearchVideoList";


export function Search() {
    return (
        <>
            <Header />
            <Banner image="pexels-tima-miroshnichenko-7991486.jpg" />
            <Container>                
                <section className={styles.search}>

                <SearchVideoList videos={videos}/>
                </section>
            </Container>
            <Footer />
        </>
    )
}