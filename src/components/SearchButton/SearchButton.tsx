import styles from "./SearchButton.module.css";

type SearchButtonProps = {
    onClick: () => void;
};

export function SearchButton({ onClick }: SearchButtonProps) {
    return (
        <button className={styles.buscar} onClick={onClick}>
            Buscar
        </button>
    );
}