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
        <li>
          <Link href="/home">
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontStyle: "normal",
                fontWeight: "350",
                fontSize: "17px",
                lineHeight: "24px",
                textDecoration: "transparent",
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
                fontStyle: "normal",
                fontWeight: "350",
                fontSize: "17px",
                lineHeight: "24px",
                textDecoration: "none",
              })}
            >
              articles
            </Typography>
          </Link>
        </li>

        <li>
          <Link href="#">
            <Typography
              variant="h6"
              sx={(theme) => ({
                color: theme.palette.primary.main,
                fontStyle: "normal",
                fontWeight: "350",
                fontSize: "17px",
                lineHeight: "24px",
                textDecoration: "none",
              })}
            >
              karta
            </Typography>
          </Link>
        </li>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C7F5FF",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          position: "relative",
          top: "-4px",
          left: "30px",
        }}
      >
        {theme.palette.mode}
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Image
              priority
              src="/images/dark.png"
              alt="Dark Mood"
              width={13}
              height={14}
            />
          ) : (
            <Image
              priority
              src="/images/light.png"
              alt="Light Mood"
              width={16}
              height={17}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Navbar;
