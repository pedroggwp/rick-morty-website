import Search from "../../components/SearchBar/Search";
import SearchButton from "../../components/SearchButton/SearchButton";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import EpisodesIcon from "../../assets/episodes.svg";
import { HOME_PATH } from "../../constants/paths";

export default function Episodes() {
  return (
    <>
      <SectionTitle
        title="EPISÓDIOS"
        iconUrl={EpisodesIcon}
        altIcon="Rick Morty ícone"
        navigateTo={HOME_PATH}
        arrowSide="left"
        description="Pesquise um episódio por sua numeração ou nome."
      />

      <Search />
      <SearchButton />
    </>
  );
}
