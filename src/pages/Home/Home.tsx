import Header from "../../components/Header/Header";
import OficialLogo from "../../assets/rick_morty_oficial_logo.svg";
import RickMortyPortal from "../../assets/rick-portal.png";
import styles from "./Home.module.css";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import RickIcon from "../../assets/rick.svg"
import EpisodeIcon from "../../assets/episodes.svg"
import { InfoCard } from "../../components/InfoCard/InfoCard";
import PlacesIcon from "../../assets/locations.svg";
import { CHARACTER_PATH, PLACES_PATH, EPISODES_PATH } from "../../constants/paths";
import { Footer } from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.logoTitle}>
            <img src={OficialLogo} alt="Logo oficial do Rick and Morty" />
            <h2 className={styles.hubTitle}>HUB</h2>
          </div>

          <div className={styles.description}>
            <p>
              Se você é fã da incrível jornada de Rick Sanchez e seu neto Morty,
              este é o lugar perfeito para explorar o universo da série!
            </p>
            <p>
              Nosso site oferece uma plataforma interativa onde você pode
              acessar e consultar informações sobre os episódios, personagens e
              locais que fazem parte dessa aventura maluca e cheia de
              reviravoltas.
            </p>
          </div>
        </div>

        <div className={styles.rightContent}>
          <img
            src={RickMortyPortal}
            alt="Rick puxando Morty em frente ao portal"
          />
        </div>
      </div>

      <SectionTitle
        title="Personagens"
        iconUrl={RickIcon}
        altIcon="Rick icon"
        navigateTo={CHARACTER_PATH}
        arrowSide="right"
      />

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

      <SectionTitle
        title="Episódios"
        iconUrl={EpisodeIcon}
        altIcon="Episódios icon"
        navigateTo={EPISODES_PATH}
        arrowSide="right"
      />

      <div className={styles.episodesContainer}>
        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="Dimension"
          type="Type"
          linkText="Ver moradores"
        />
      </div>

      <SectionTitle
        title="Lugares"
        iconUrl={PlacesIcon}
        altIcon="Lugares icon"
        navigateTo={PLACES_PATH}
        arrowSide="right"
      />

      <div className={styles.episodesContainer}>
        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />

        <InfoCard
          name="Lorem Ipsum"
          dimension="December 2, 2013"
          type="S01E01"
          linkText="Ver personagens"
        />
      </div>

      <Footer />
    </>
  );
}
