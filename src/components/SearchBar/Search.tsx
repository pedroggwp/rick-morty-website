import styles from "./Search.module.css";
import Lupa from "../../assets/search_icon.svg";

type SearchProps = {
    placeholder?: string;
    query: string;
    setQuery: (value: string) => void; 
};

export function Search({ placeholder = "Buscar...", query, setQuery }: SearchProps) {
    return (
        <div className={styles.busca}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <img className={styles.lupa} src={Lupa} alt="Ícone de busca" />
        </div>
    );
}