import { Theme } from "@mui/material";

export const NavbarContainerStyles = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // gap: "2rem",
  // padding: "0 2rem",
  paddingTop: "1.7rem",
  height: "130px",
  width: "100%",
  backgroundColor: "#C7F5FF",

  [theme.breakpoints.down(750)]: {
    backgroundColor: "red",
  },
});

export const NavbarLiStyles = (theme: Theme) => ({
  position: "relative",
  // left: "290px",
  padding: "0",
  marginRight: "20px",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: "35px",
  width: "fit-content",
  height: "35px",

  [theme.breakpoints.down(750)]: {
    backgroundColor: "#C7F5FF",
    display: "none",
  },
});
