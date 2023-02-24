import { Theme } from "@mui/material";

export const ScrollOneStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const ScrollOneContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "start",
  justifyContent: "center",
  justifyItems: "center",
  height: "884px",
  width: "100%",
  backgroundColor: "#C7F5FF",
});
