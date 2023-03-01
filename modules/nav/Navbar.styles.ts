import { Theme } from "@mui/material";

export const NavbarContainerStyles = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
  padding: "0 2rem",
  paddingTop: "1.7rem",
  height: "130px",
  width: "100%",
  backgroundColor: "#C7F5FF",

  [theme.breakpoints.down("sm")]: {
    // width: "414px",
    // height: "896px",
    backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {
    // width: "100%",
    // height: "1024px",
    backgroundColor: "red",
  },
  [theme.breakpoints.down("lg")]: {
    // width: "1280px",
    // height: "800px",
    backgroundColor: "yellow",
  },
});

export const NavbarLiStyles = (theme: Theme) => ({
  backgroundColor: "#C7F5FF",
  position: "relative",
  left: "300px",
  padding: "0",
  margin: "0",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  width: "240px",
  height: "35px",

  [theme.breakpoints.down("sm")]: {
    display: "none",
    width: "100px",
    height: "896px",
    backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "1024px",
    backgroundColor: "red",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100px",
    height: "800px",
    // backgroundColor: "grey",
  },
});
