import styles from "./SearchSet.module.css";
import { Search } from "../SearchBar/Search";
import { SearchButton } from "../SearchButton/SearchButton";
import { useState } from "react";

export function SearchSet() {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        console.log("Buscando por:", query);
        // Aqui você pode fazer uma requisição à API ou filtrar os dados
    };

    return (
        <div className={styles.conjunto}>
            <Search placeholder="Pesquise pelo número ou nome" query={query} setQuery={setQuery} />
            <SearchButton onClick={handleSearch} />
        </div>
    );
}
