import styles from "./CharacterCard.module.css";

interface CharacterParams {
  name: string,
  species: string,
  gender: string,
  status: string,
  imageUrl: string,
}

const CharacterCard: React.FC<CharacterParams> = ({
  name,
  species,
  gender,
  status,
  imageUrl,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={imageUrl} alt="Imagem do personagem" />
      </div>

      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.species}>{species}</h2>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Gênero:</span>
            <span className={styles.value}>{gender}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Status:</span>
            <span className={styles.value}>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
