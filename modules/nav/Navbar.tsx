import { Box, IconButton, Typography, useTheme, Link } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { ColorModeContext } from "@/pages/_app";
import { NavbarLiStyles, NavbarContainerStyles } from "./Navbar.styles";
//import MenuIcon from "@mui/icons-material/Menu";

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
        {/* //<MenuIcon /> */}
        <li>
          <Link href="/home" sx={{ textDecoration: "none" }}>
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
          <Link href="/articles" sx={{ textDecoration: "none" }}>
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
          <Link href="#" sx={{ textDecoration: "none" }}>
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
          padding: "-3px",
          position: "relative",
          top: "-4px",
          left: "30px",
        }}
      >
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Image
              priority
              src="/images/dark.png"
              alt="Dark Mode"
              width={13}
              height={14}
            />
          ) : (
            <Image
              priority
              src="/images/light.png"
              alt="Light Mode"
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
