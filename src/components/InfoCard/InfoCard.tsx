import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  firstTitle: string;
  firstInfo: string;
  secTitle: string;
  secInfo: string;
  id: number;
};

export function InfoCard({ title, firstTitle, firstInfo, secTitle, secInfo, id }: InfoCardProps) {
  return (
    <div className={styles.episodesCard}>
      <div className={styles.first}>
        <h3>{title}</h3>
        <p>ID: {id}</p>
      </div>
      <div className={styles.second}>
        <h6>{firstTitle}:</h6>
        <p>{firstInfo}</p>
        <h6>{secTitle}:</h6>
        <p>{secInfo}</p>
      </div>
    </div>
  );
}
