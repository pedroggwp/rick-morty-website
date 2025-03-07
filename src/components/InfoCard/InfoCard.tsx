import styles from "./InfoCard.module.css";

type InfoCardProps = {
  name: string;
  dimension: string;
  type: string;
  linkText: string;
};

export function InfoCard({ name, dimension, type, linkText }: InfoCardProps) {
  return (
    <div className={styles.episodesCard}>
      <h3>{name}</h3>
      <p>{dimension}</p>
      <p>{type}</p>
      <a href="#">{linkText}</a>
    </div>
  );
}
