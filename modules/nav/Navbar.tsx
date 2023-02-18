
import { Typography } from "@mui/material";
import styles from "./navbar.module.css";

function Navbar() {

  return (
    <>
      <nav className={styles.nav}>
        <a href="/nav" className={styles.siteTitle}>
          {/* <Icon /> */}
        </a>
        <ul>
          <li>
            <a href="/home">
              <Typography
                variant="h6"
              >
                Home
              </Typography>
            </a>
          </li>

          <li>
            <a href="/articles">
              <Typography
                variant="h6"
              >
                Articles
              </Typography>
            </a>
          </li>

          <li>
            <a href="/karta">
              <Typography
                variant="h6"
              >
                Karta
              </Typography>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
