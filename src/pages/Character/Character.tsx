import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { HOME_PATH } from "../../constants/paths";
import RickIcon from "../../assets/rick.svg";

export const Character = () => {
  return (
    <>
      <SectionTitle
        title="PERSONAGENS"
        iconUrl={RickIcon}
        altIcon="Rick Morty ícone"
        navigateTo={HOME_PATH}
        arrowSide="left"
        description="Encontre os personagens da série por sua numeração ou nome."
      />
    </>
  );
};
