
import { Typography } from "@mui/material";
import styles from "./navbar.module.css";
import Image from 'next/image';

function Navbar() {

  return (
    <nav className={styles.nav}>
      <a href="/nav" className={styles.siteTitle}>
        {
          <Image
            priority
            src="/assets/paradoks.svg"
            height={63}
            width={255}
            alt="Paradoks Logo"
          />
        }
      </a>
      <ul>
        <li>
          <a href="/home">
            <Typography
              variant="h6"
            >
              home
            </Typography>
          </a>
        </li>

        <li>
          <a href="/articles">
            <Typography
              variant="h6"
            >
              articles
            </Typography>
          </a>
        </li>

        <li>
          <a href="/karta">
            <Typography
              variant="h6"
            >
              karta
            </Typography>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
