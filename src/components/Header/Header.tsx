import styles from "./Header.module.css"
import  Logo  from "../../assets/logo.svg"


export default function Header() {

    return (
      
        <header className={styles.headerContainer}>

            <div className={styles.homeButton}>
                <img src={Logo} alt="" />
            </div>

            <div>
                <ul>
                    <li><a href="">Personagens</a></li>
                    <li><a href="">Episódios</a></li>
                    <li><a href="">Lugares</a></li>
                </ul>
            </div>
        </header>
    
    )
}