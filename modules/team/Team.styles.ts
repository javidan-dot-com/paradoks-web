import { Theme } from "@mui/material";

export const TeamStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const TeamContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "884px",
  width: "100%",
  backgroundColor: "white",
});
