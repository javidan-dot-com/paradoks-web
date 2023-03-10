import { Theme } from "@mui/material";

export const NavbarContainerStyles = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "4rem",
  paddingRight: "4rem",
  alignItems: "center",
  paddingTop: "4rem",
  height: "130px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.down(750)]: {
    backgroundColor: "red",
  },
});

export const NavbarLiStyles = (theme: Theme) => ({
  position: "relative",
  padding: "0",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  width: "fit-content",
  height: "35px",

  [theme.breakpoints.down(750)]: {
    display: "none",
  },
});
