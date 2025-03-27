import styles from "./Locations.module.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { HOME_PATH } from "../../constants/paths";
import LocationIcon from "../../assets/locations.svg";
import { SearchSet } from "../../components/SearchSet/SearchSet"
import { useState, useEffect } from "react";
import { Location } from "../../types/Location";
import {
  fetchLocations
} from "../../service/ApiService";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Selection } from "../../components/Selection/Selection";

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const [locData] = await Promise.all([
            fetchLocations()
          ]);
  
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
      <div className={styles.header}>
        <SectionTitle
          title="LUGARES"
          iconUrl={LocationIcon}
          altIcon="Rick Morty ícone"
          navigateTo={HOME_PATH}
          arrowSide="left"
          description="Encontre os lugares da série por sua numeração ou nome."
        />
        <SearchSet/>
      </div>

      <div className={styles.filters}>
        <Selection items={["OI", "A"]} />
        <Selection items={["OI", "A"]} />
        <Selection items={["OI", "A"]} />
      </div>

      <div className={styles.cont}>
        <div className={styles.episodesContainer}>
          {locations.map((loc) => (
              <InfoCard
                title={loc.name}
                firstTitle="Dimension"
                firstInfo={loc.dimension}
                secTitle="type"
                secInfo={loc.type}
                id={loc.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};