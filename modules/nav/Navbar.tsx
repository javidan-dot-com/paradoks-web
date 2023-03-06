import { Box, IconButton, Typography, useTheme, Link } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { ColorModeContext } from "@/pages/_app";
// import {  Menu, MenuItem, HandleMenu } from "@/pages/_app";
import { NavbarLiStyles, NavbarContainerStyles } from "./Navbar.styles";

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  // const menuBar = useContext(Menu);

  return (
    <Box sx={(theme) => NavbarContainerStyles(theme)}>
      <Box>
        <Link href="/nav">
          <Box
            sx={{
              display: "flex",
              width: "225px",
              height: "63px",
              position: "relative",

              [theme.breakpoints.down("md")]: {
                width: "165px",
                height: "56px",
              },
            }}
          >
            <Image
              priority
              src="/assets/paradoks.svg"
              fill={true}
              alt="Paradoks Logo"
            />
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={(theme) => NavbarLiStyles(theme)}>
          <li>
            <Link
              href="/home"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontStyle: "normal",
                  fontWeight: "350",
                  fontSize: "17px",
                  lineHeight: "24px",
                }}
              >
                home
              </Typography>
            </Link>
          </li>

          <li>
            <Link
              href="/articles"
              sx={{
                textDecoration: "none",
              }}
            >
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
            <Link
              href="#"
              sx={{
                textDecoration: "none",
              }}
            >
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
            display: "none",

            [theme.breakpoints.down(750)]: {
              display: "flex",
            },
          }}
        >
          {/* <IconButton onClick={HandleMenu}> */}
          <Image
            priority
            src="/images/menu.png"
            alt="Menu"
            width={24}
            height={24}
          />
          {/* </IconButton> */}
        </Box>

        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#C7F5FF",
            color: "text.primary",
            borderRadius: 1,
            position: "relative",
            top: "-4px",
          }}
        >
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
    </Box>
  );
}

export default Navbar;
