import { Box, IconButton, Typography, useTheme, Link } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { ColorModeContext } from "@/pages/_app";
import { NavbarLiStyles, NavbarContainerStyles } from "./Navbar.styles";

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={(theme) => NavbarContainerStyles(theme)}>
      <Box>
        <Link href="/nav">
          {
            <Image
              priority
              src="/assets/paradoks.svg"
              height={63}
              width={255}
              alt="Paradoks Logo"
            />
          }
        </Link>
      </Box>
      <Box sx={(theme) => NavbarLiStyles(theme)}>
        <ul>
          <li>
            <Link href="/home">
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                home
              </Typography>
            </Link>
          </li>

          <li>
            <Link href="/articles">
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                articles
              </Typography>
            </Link>
          </li>

          <li>
            <Link href="#">
              Link
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                karta
              </Typography>
            </Link>
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? "DARK" : "LIGHT"}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Navbar;
