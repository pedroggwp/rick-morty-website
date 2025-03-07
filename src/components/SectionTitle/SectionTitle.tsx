import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/right-arrow.svg";
import styles from "./SectionTitle.module.css";

type Props = {
    title: string;
    iconUrl: string;
    altIcon: string;
    navigateTo: string;
}

export const SectionTitle = ({ title, iconUrl, altIcon, navigateTo }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${navigateTo}`)
  }

  return (
    <div className={styles.sectionTitle}>
      <div className={styles.leftSide}>
        <h1>{title.toUpperCase()}</h1>
        <img src={iconUrl} alt={altIcon} />
      </div>

      <img
        className={styles.arrowIcon}
        src={ArrowIcon}
        alt="Ícone de uma seta"
        onClick={handleNavigation}
      />
    </div>
  );
};
