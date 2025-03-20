import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { HOME_PATH } from "../../constants/paths"
import RickIcon from "../../assets/rick.svg"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard"
import styles from "./Character.module.css"

export const Character = () => {

    return (
      <>
        <SectionTitle
          title="PERSONAGENS"
          iconUrl={RickIcon}
          altIcon="Rick Morty ícone"
          navigateTo={HOME_PATH}
          arrowSide="left"
          description="Descrição"
        />

        <p>Ache personagens pelo nome, ou aplique filtros.</p>

        <span>Resultados (######)</span>
        {/* CARREGAR CARDS DOS PERSONAGENS */}

        <div className={styles.cardsContainer}>
          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />

          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />

          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />

          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />

          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />

          <CharacterCard
            name="Rick Sanchez"
            species="Humano"
            gender="Masculino"
            status="Vivo"
            imageUrl="https://rickandmortyapi.com/api/character/avatar/385.jpeg"
          />
        </div>
      </>
    );
}
