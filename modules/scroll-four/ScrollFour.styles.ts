import { Theme } from "@mui/material";

export const ScrollFourStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: "35px",
});

export const ScrollFourContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#e0ebeb",
});
