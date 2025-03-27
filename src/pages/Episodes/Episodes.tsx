import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import EpisodesIcon from "../../assets/episodes.svg";
import { HOME_PATH } from "../../constants/paths";
import { Search } from "../../components/SearchBar/Search";
import { SearchButton } from "../../components/SearchButton/SearchButton";import styles from "./Episodes.module.css";
import { useState, useEffect } from "react";
import { Episode } from "../../types/Episode";
import { fetchEpisodes } from "../../service/ApiService";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Selection } from "../../components/Selection/Selection";

export function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    name: "",
    episode: "",
  });
  const [selectedSeason, setSelectedSeason] = useState("");
  const [query, setQuery] = useState("");

  const fetchData = async (filters: { name: string; episode: string }) => {
    setLoading(true);
    setError(null);

    try {
      const epData = await fetchEpisodes(filters);
      setEpisodes(epData.results);
    } catch (err) {
      setError("Erro ao carregar dados.");
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  fetchData(filters);
}, [filters]);

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
      </div>

      <div className={styles.selectionContainer}>
      <Selection
        items={["", "S01", "S02", "S03", "S04", "S05"]}
        selectedItem={selectedSeason}
        onSelect={(value) => {
          setSelectedSeason(value);
          setFilters((prev) => ({ ...prev, episode: value }));
        }}
      />
      <Search placeholder="O nome do episódio" query={query} setQuery={setQuery} />
      <SearchButton onClick={() => fetchData({ ...filters, name: query })} />
      </div>
        
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loading}>Carregando...</p>}

      <div className={styles.cont}>
        <div className={styles.episodesContainer}>
          {episodes.map((ep) => (
            <InfoCard
              key={ep.id}
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
