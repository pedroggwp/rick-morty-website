import styles from "./SearchButton.module.css";

interface SearchProps {
    onClick: () => void;
}

export default function Search({ onClick }: SearchProps) {
    return (
        <button className={styles.buscar} onClick={onClick}>
            Buscar
        </button>
    );
}