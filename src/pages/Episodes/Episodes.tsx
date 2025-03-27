import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import EpisodesIcon from "../../assets/episodes.svg";
import { HOME_PATH } from "../../constants/paths";
import { SearchSet } from "../../components/SearchSet/SearchSet"
import styles from "./Episodes.module.css"
import { useState, useEffect } from "react";
import { Episode } from "../../types/Episode";
import {
  fetchEpisodes
} from "../../service/ApiService";
import { InfoCard } from "../../components/InfoCard/InfoCard";


export function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
      const fetchData = async () => {
        try {
          const [epData] = await Promise.all([
            fetchEpisodes()
          ]);

          setEpisodes(epData.results.slice(0, 6));

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
      <div className={styles.header}>
        <SectionTitle
          title="EPISÓDIOS"
          iconUrl={EpisodesIcon}
          altIcon="Rick Morty ícone"
          navigateTo={HOME_PATH}
          arrowSide="left"
          description="Pesquise um episódio por sua numeração ou nome."
        />
        <SearchSet/>
      </div>

      <div className={styles.cont}>
        <div className={styles.episodesContainer}>
          {episodes.map((ep) => (
            <InfoCard
              title={ep.name}
              firstTitle="Air Date"
              firstInfo={ep.air_date}
              secTitle="Episode code"
              secInfo={ep.episode}
              id={ep.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}