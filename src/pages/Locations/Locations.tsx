import styles from "./Locations.module.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { HOME_PATH } from "../../constants/paths";
import LocationIcon from "../../assets/locations.svg";

export const Locations = () => {
  return (
    <>
      <SectionTitle
        title="LUGARES"
        iconUrl={LocationIcon}
        altIcon="Rick Morty ícone"
        navigateTo={HOME_PATH}
        arrowSide="left"
        description="Encontre os lugares da série por sua numeração ou nome."
      />
    </>
  );
};
