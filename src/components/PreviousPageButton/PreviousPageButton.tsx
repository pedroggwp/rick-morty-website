import LeftArrow from "../../assets/left-arrow.svg";
import { MouseEventHandler } from "react";
import styles from "./PreviousPageButton.module.css";

type Props = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

export const PreviousPageButton = ({ onClick }: Props) => (
  <div
    className={styles.container}
    onClick={onClick}
    role="button"
    style={{ cursor: "pointer" }}
  >
    <img src={LeftArrow} alt="Página Anterior" />
    <p>PÁGINA ANTERIOR</p>
  </div>
);
