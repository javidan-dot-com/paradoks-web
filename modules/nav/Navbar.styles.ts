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
});

export const NavbarLiStyles = (theme: Theme) => ({
  backgroundColor: "#C7F5FF",
  position: "relative",
  left: "290px",
  padding: "0",
  margin: "0",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  width: "240px",
  height: "35px",
});
