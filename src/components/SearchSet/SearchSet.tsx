import styles from "./SearchSet.module.css"
import { Search } from "../SearchBar/Search"
import { SearchButton } from "../SearchButton/SearchButton"

export function SearchSet(){
    return (
        <div className={styles.conjunto}>
            <Search placeholder="Pesquise pelo número ou nome"/>
            <SearchButton onClick={() => console.log("Botão clicado!")} />
        </div>
    );
}