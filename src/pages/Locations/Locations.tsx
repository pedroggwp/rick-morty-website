import styles from "./Locations.module.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { HOME_PATH } from "../../constants/paths";
import LocationIcon from "../../assets/locations.svg";
import { useState, useEffect } from "react";
import { Location } from "../../types/Location";
import { fetchLocations } from "../../service/ApiService";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Selection } from "../../components/Selection/Selection";
import { Search } from "../../components/SearchBar/Search";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    name: "",
    dimension: "",
    type: "",
  });
  const [selectedDimension, setSelectedDimension] = useState("");
  const [query, setQuery] = useState("");


  const fetchData = async (filters: { name: string; dimension: string; type: string }, endpoint?: string) => {
    setLoading(true);
    setError(null);

    try {
      const locData = await fetchLocations(filters, endpoint);
      setLocations(locData.results);
      setNextPageUrl(locData.info.next);
    } catch (err) {
      setError("Erro ao carregar dados.");
      setLocations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  const handleNextPage = () => {
    if (nextPageUrl) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      fetchData(filters, nextPageUrl);
    }
  };

  return (
    <>

    
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <SectionTitle
            title="LUGARES"
            iconUrl={LocationIcon}
            altIcon="Rick Morty ícone"
            navigateTo={HOME_PATH}
            arrowSide="left"
            description="Encontre os lugares da série por sua numeração ou nome."
          />
        </div>


        {error && <p className={styles.error}>{error}</p>}
        {loading && <p className={styles.loading}>Carregando...</p>}



        <div className={styles.selectionContainer}>
          <Selection
            items={["", "Dimension A", "Dimension B", "Dimension C"]}
            selectedItem={selectedDimension}
            onSelect={(value) => {
              setSelectedDimension(value);
              setFilters((prev) => ({ ...prev, dimension: value }));
            }}
          />
          <div className={styles.searchSet}>
            <Search placeholder="Digite nome ou numeração" query={query} setQuery={setQuery} />
            <SearchButton onClick={() => fetchData({ ...filters, name: query })} />
          </div>
        

        </div>


        <span className={styles.resultText}>Resultados ({locations.length})</span>  
        <div className={styles.cont}>
          <div className={styles.locationsContainer}>
            {locations.map((loc) => (
              <InfoCard
                key={loc.id}
                title={loc.name}
                firstTitle="Dimension"
                firstInfo={loc.dimension}
                secTitle="Type"
                secInfo={loc.type}
                id={loc.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.nextPageContainer}>
        {nextPageUrl ? (
          <NextPageButton onClick={handleNextPage} />
        ) : (
          <p>Você chegou ao final dos resultados.</p>
        )}
      </div>
    </>
  );
};
