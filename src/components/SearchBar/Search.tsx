import styles from "./Search.module.css"
import  Busca  from "../../assets/search_icon.svg"


export default function Search() {
    return (
        <div className={styles.searchBar}>
            <img src={Busca} alt="icone de busca" />
        </div>
    );
}