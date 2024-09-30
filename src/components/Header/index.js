import styles from './Header.module.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><span>Projeto Filmes</span></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
                <Link to="/Search">Pesquisar</Link>
            </nav>
        </header>
    );
}


