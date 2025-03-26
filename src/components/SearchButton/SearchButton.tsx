import styles from "./SearchButton.module.css";

interface SearchProps {
    onClick: () => void;
}

export function SearchButton({ onClick }: SearchProps) {
    return (
        <button className={styles.buscar} onClick={onClick}>
            Buscar
        </button>
    );
}