import { Theme } from "@mui/material";

export const ScrollTwoStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,

  fontFamily: theme.typography.fontFamily,
});

export const ScrollTwoContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  justifyItems: "center",
  height: "884px",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
});
