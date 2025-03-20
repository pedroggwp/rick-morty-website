import styles from "./Search.module.css"
import  Lupa  from "../../assets/search_icon.svg"
import { useState } from "react";

export default function Search({ placeholder = "Buscar..." }) {
    const [query, setQuery] = useState("");

    return (
        <div className={styles.busca}>
            <input
                className={styles.searchBar}
                type="text" 
                placeholder={placeholder} 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
            />

            <img src={Lupa} alt="icone de busca"/>
        </div>
    );
}