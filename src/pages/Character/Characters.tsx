import { useState, useEffect } from "react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { HOME_PATH } from "../../constants/paths";
import RickIcon from "../../assets/rick.svg";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import styles from "./Character.module.css";
import { Selection } from "../../components/Selection/Selection";
import { Search } from "../../components/SearchBar/Search";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { fetchCharacters } from "../../service/ApiService";
import { Character } from "../../types/Character";

type Filters = {
  name: string;
  status: string;
  species: string;
  gender: string;
};

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filters, setFilters] = useState<Filters>({ name: "", status: "", species: "", gender: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [query, setQuery] = useState("");


  const fetchData = async (filters: Filters) => {
    setLoading(true);
    setError(null);

    try {
      const charData = await fetchCharacters(filters);
      setCharacters(charData.results);
    } catch (err) {
      setError("Erro ao carregar dados.");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  return (
    <div className={styles.characterContainer}>
      <div className={styles.header}>
        <SectionTitle
          title="PERSONAGENS"
          iconUrl={RickIcon}
          altIcon="Rick Morty ícone"
          navigateTo={HOME_PATH}
          arrowSide="left"
          description="Pesquise um episódio por sua numeração ou nome."
        />

        <div className={styles.searchSet}>
          <Search placeholder="Digite um personagem" query={query} setQuery={setQuery} />
          <SearchButton onClick={() => fetchData({ ...filters, name: query })} />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loading}>Carregando...</p>}

      <div className={styles.filters}>
        <Selection
          items={["", "Alive", "Dead", "unknown"]}
          selectedItem={selectedStatus}
          onSelect={(value) => {
            setSelectedStatus(value);
            setFilters((prev) => ({ ...prev, status: value }));
          }}
        />

        <Selection
          items={["", "Human", "Alien", "Robot"]}
          selectedItem={selectedSpecies}
          onSelect={(value) => {
            setSelectedSpecies(value);
            setFilters((prev) => ({ ...prev, species: value }));
          }}
        />

        <Selection
          items={["", "Male", "Female", "Genderless", "unknown"]}
          selectedItem={selectedGender}
          onSelect={(value) => {
            setSelectedGender(value);
            setFilters((prev) => ({ ...prev, gender: value }));
          }}
        />
      </div>

      <span>Resultados ({characters.length})</span>

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
    </div>
  );
};
