import styles from "./Header.module.css"
import  Logo  from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import {
  HOME_PATH,
  CHARACTER_PATH,
  PLACES_PATH,
  EPISODES_PATH,
} from "../../constants/paths";

export default function Header() {
    return (
      <header className={styles.container}>
        <div className={styles.btn}>
          <Link to={HOME_PATH}>
            <img src={Logo} alt="Logo do site" />
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <Link to={CHARACTER_PATH}>Personagens</Link>
            </li>
            <li>
              <Link to={EPISODES_PATH}>Episódios</Link>
            </li>
            <li>
              <Link to={PLACES_PATH}>Lugares</Link>
            </li>
          </ul>
        </div>
      </header>
    );
}