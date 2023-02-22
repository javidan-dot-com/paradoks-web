import { Theme } from "@mui/material";

export const ScrollOneStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: "26px",
});

export const ScrollOneContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  justifyItems: "center",
  height: "700px",
  width: "1322px",
  backgroundColor: "#C7F5FF",
  padding: "2rem",
});

export const ScrollOneHeaderContainerStyles = (theme: Theme) => ({
  position: "relative",
  width: "725px",
  height: "82px",
  backgroundColor: "white",
})