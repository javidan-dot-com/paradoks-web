import { style } from "@mui/system";
import styles from "./navbar.module.css";
// import Icon from "././public/logo.svg";
import Icon from "././public/logo.svg";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="/nav" className={styles.siteTitle}>
          <Icon />
        </a>
        <ul>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/articles">articles</a>
          </li>
          <li>
            <a href="/karta">karta</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
