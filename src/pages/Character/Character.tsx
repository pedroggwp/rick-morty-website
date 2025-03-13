import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { HOME_PATH } from "../../constants/paths"
import RickIcon from "../../assets/rick.svg"

export const Character = () => {

    return (
      <>
        <SectionTitle
          title="PERSONAGENS"
          iconUrl={RickIcon}
          altIcon="Rick Morty ícone"
          navigateTo={HOME_PATH}
          arrowSide="left"
        />

        <p>Ache personagens pelo nome, ou aplique filtros.</p>
      </>
    );
}