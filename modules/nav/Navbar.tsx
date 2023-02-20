
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import styles from "./navbar.module.css";
import Image from 'next/image';
import { useContext } from "react";
import { ColorModeContext } from "@/pages/_app";

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
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
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                home
              </Typography>
            </a>
          </li>

          <li>
            <a href="/articles">
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                articles
              </Typography>
            </a>
          </li>

          <li>
            <a href="/karta">
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                karta
              </Typography>
            </a>
          </li>
        </ul>
      </nav>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? "DARK" : "LIGHT"}
        </IconButton>
      </Box>
    </>
  );
}

export default Navbar;
