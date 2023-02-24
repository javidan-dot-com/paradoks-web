import { Theme } from "@mui/material";

export const NavbarContainerStyles = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
  padding: "0 2rem",
  paddingTop: "1.5rem",
});

export const NavbarLiStyles = (theme: Theme) => ({
  padding: "0",
  margin: "0",
  listStyle: "none",
  display: "flex",
  gap: "40px",
  width: "252px",
  height: "35px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "24px",
});
