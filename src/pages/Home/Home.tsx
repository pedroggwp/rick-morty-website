import Header from "../../components/Header/Header";
import OficialLogo from "../../assets/rick_morty_oficial_logo.svg";
import RickMortyPortal from "../../assets/rick-portal.png";
import styles from "./Home.module.css";

export default function Home() {
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
        </div>

        <div className={styles.rightContent}>
          <img
            src={RickMortyPortal}
            alt="Rick puxando Morty em frente ao portal"
          />
        </div>
      </div>
    </>
  );
}
