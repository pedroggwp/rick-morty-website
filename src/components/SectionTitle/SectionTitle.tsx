import styles from "./SectionTitle.module.css";
import { Arrow } from "../Arrow/Arrow";

type Props = {
  title: string;
  iconUrl: string;
  altIcon: string;
  navigateTo: string;
  arrowSide: "right" | "left";
};

export const SectionTitle = ({
  title,
  iconUrl,
  altIcon,
  navigateTo,
  arrowSide,
}: Props) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.leftSide}>
        {arrowSide === "right" ? (
          <>
            <h1>{title.toUpperCase()}</h1>
            <img src={iconUrl} alt={altIcon} />
            <Arrow navigateTo={navigateTo} arrowSide={arrowSide} />
          </>
        ) : (
          <>
            <Arrow navigateTo={navigateTo} arrowSide={arrowSide} />
            <img src={iconUrl} alt={altIcon} />
            <h1>{title.toUpperCase()}</h1>
          </>
        )}
      </div>
    </div>
  );
};
