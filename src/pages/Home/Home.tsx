import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import OficialLogo from "../../assets/rick_morty_oficial_logo.svg";
import RickMortyPortal from "../../assets/rick-portal.png";
import styles from "./Home.module.css";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import RickIcon from "../../assets/rick.svg";
import EpisodeIcon from "../../assets/episodes.svg";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import PlacesIcon from "../../assets/locations.svg";
import {
  CHARACTER_PATH,
  PLACES_PATH,
  EPISODES_PATH,
} from "../../constants/paths";
import { Footer } from "../../components/Footer/Footer";
import {
  fetchCharacters,
  fetchLocations,
  fetchEpisodes,
} from "../../service/ApiService";
import { Character } from "../../types/Character";
import { Episode } from "../../types/Episode";
import { Location } from "../../types/Location";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charData, epData, locData] = await Promise.all([
          fetchCharacters(),
          fetchEpisodes(),
          fetchLocations(),
        ]);

        setCharacters(charData.results.slice(0, 6));
        setEpisodes(epData.results.slice(0, 6));
        setLocations(locData.results.slice(0, 6));
      } catch (err) {
        setError("Erro ao carregar dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

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

          <div className={styles.description}>
            <p>
              Rick&Morty HUB oferece uma plataforma interativa onde você pode
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
        description=""
      />

      <div className={styles.cardsContainer}>
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            status={char.status}
            imageUrl={char.image}
          />
        ))}
      </div>

      <SectionTitle
        title="Episódios"
        iconUrl={EpisodeIcon}
        altIcon="Episódios icon"
        navigateTo={EPISODES_PATH}
        arrowSide="right"
        description=""
      />

      <div className={styles.episodesContainer}>
        {episodes.map((ep) => (
          <InfoCard
            key={ep.id}
            name={ep.name}
            dimension={ep.air_date}
            type={ep.episode}
            linkText="Ver detalhes"
          />
        ))}
      </div>

      <SectionTitle
        title="Lugares"
        iconUrl={PlacesIcon}
        altIcon="Lugares icon"
        navigateTo={PLACES_PATH}
        arrowSide="right"
        description=""
      />

      <div className={styles.episodesContainer}>
        {locations.map((loc) => (
          <InfoCard
            key={loc.id}
            name={loc.name}
            dimension={loc.dimension}
            type={loc.type}
            linkText="Ver personagens"
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
