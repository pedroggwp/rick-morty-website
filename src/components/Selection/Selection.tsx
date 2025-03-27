import { useState } from "react";
import styles from "./Selection.module.css";
import Caret from '../../assets/caret.svg';

type Props = {
  items: string[];
  selectedItem?: string;
  onSelect?: (item: string) => void;
};

export const Selection = ({ items, selectedItem, onSelect }: Props) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleSelect = (item: string) => {
    onSelect?.(item);
    setIsListOpen(false);
  };

  return (
    <div className={styles.selectionContainer}>
      <div
        className={styles.formContent}
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <p>{selectedItem || "Selecione um item"}</p>
        <img src={Caret} alt="Seta" className={styles.arrow} />
      </div>

      {isListOpen && (
        <div className={styles.itemList}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className={`${styles.selectionItem} ${
                selectedItem === item ? styles.selected : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
