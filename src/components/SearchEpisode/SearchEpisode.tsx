import styles from "./SearchEpisode.module.css"
import { Search } from "../SearchBar/Search"
import { SearchButton } from "../SearchButton/SearchButton"

export function SearchEpisode(){
    return (
        <div className={styles.conjunto}>
            <Search placeholder="Número ou nome do episódio"/>
            <SearchButton onClick={() => console.log("Botão clicado!")} />
        </div>
    );
}