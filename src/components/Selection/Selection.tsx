import { useState } from "react";
import styles from "./Selection.module.css";

interface SelectionProps {
  items: string[];
  onSelect?: (item: string) => void;
  arrowImage: string;
}

export const Selection: React.FC<SelectionProps> = ({ items, onSelect, arrowImage }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsListOpen(false);
    onSelect?.(item);
  };

  return (
    <div className={styles.selectionContainer}>
      <div 
        className={styles.formContent} 
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <p>{selectedItem || "Selecione um item"}</p>
        <img src={arrowImage} alt="Seta" className={styles.arrow} />
      </div>

      {isListOpen && (
        <div className={styles.itemList}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className={`${styles.selectionItem} ${selectedItem === item ? styles.selected : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
