import styles from "./SearchVideoList.module.css";
import searchIcon from "./assets/procurar.png";
import { VideoList } from "../VideoList";
import { useState } from "react";

function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

export function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState("");
    const foundVideos = filterVideos(videos, searchText)

    return (
        <section className={styles.SearchVideoList}>
            <div>
                <input
                    type="search"
                    placeholder="BUSCAR..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <img src={searchIcon} />
            </div>
            <VideoList videos={foundVideos}
                emptyHeading={`Não há vídeos para "${searchText}"`}
            />
        </section>
    )
}