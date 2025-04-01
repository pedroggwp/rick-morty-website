import RightArrow from "../../assets/right-arrow.svg";
import { MouseEventHandler } from "react";
import styles from "./NextPageButton.module.css";

type Props = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

export const NextPageButton = ({ onClick }: Props) => (
  <div
    className={styles.container}
    onClick={onClick}
    role="button"
    style={{ cursor: "pointer" }}
  >
    <p>PRÓXIMA PÁGINA</p>
    <img
      src={RightArrow}
      alt="Próxima Página"
    />
  </div>
);
