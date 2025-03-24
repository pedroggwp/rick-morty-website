import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { HOME_PATH } from "../../constants/paths"
import RickIcon from "../../assets/rick.svg"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard"
import styles from "./Character.module.css"
import { Selection } from "../../components/Selection/Selection"
import Search from "../../components/SearchBar/Search"
import { SearchButton } from "../../components/SearchButton/SearchButton"

export const Character = () => {

    return (
      <div className={styles.characterContainer}>
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

        <div className={styles.selectionContainer}>
          <Selection items={["OI", "A"]} />

          <Selection items={["OI", "A"]} />

          <Selection items={["OI", "A"]} />

          <Search placeholder="Digite um personagem" />

          <SearchButton onClick={() => console.log("clicou")}/>
        </div>

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
      </div>
    );
}
