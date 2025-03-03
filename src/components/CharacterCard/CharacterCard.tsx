import styles from './CharacterCard.module.css'

interface CharacterParams {
    name: string,
    specie: string,
    gender: string,
    status: string,
    imageUrl: string
}

const CharacterCard: React.FC<CharacterParams> = ({name, specie, gender, status, imageUrl}) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={imageUrl} alt="Imagem do personagem" />
      </div>

      <div className={styles.info}>
        <h1>{name}</h1>
        <h2>{specie}</h2>

        <span>Gênero:</span>
        <p>{gender}</p>

        <span>Status:</span>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default CharacterCard
