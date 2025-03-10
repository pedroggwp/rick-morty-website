import styles from "./Arrow.module.css"
import RightArrowIcon from "../../assets/right-arrow.svg";
import LeftArrowIcon from "../../assets/left-arrow.svg";
import { Link } from "react-router-dom";

type Props = {
  navigateTo: string;
  arrowSide: "left" | "right";
};

export const Arrow = ({ navigateTo, arrowSide }: Props) => {
  return (
    <div>
      {arrowSide == "right" ? (
        <Link to={navigateTo}>
          <img
            className={styles.arrowIcon}
            src={RightArrowIcon}
            alt="Ícone de uma seta"
          />
        </Link>
      ) : (
        <Link to={navigateTo}>
          <img
            className={styles.arrowIcon}
            src={LeftArrowIcon}
            alt="Ícone de uma seta"
          />
        </Link>
      )}
    </div>
  );
};