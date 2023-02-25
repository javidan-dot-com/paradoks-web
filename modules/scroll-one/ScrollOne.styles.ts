import { Theme } from "@mui/material";

export const ScrollOneStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: "23px",
});

export const ScrollOneContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  justifyItems: "center",
  height: "884px",
  top: "20px",
  width: "100%",
  backgroundColor: "#C7F5FF",
});

export const ScrollOneHeaderContainerStyles = (theme: Theme) => ({
  position: "relative",
  width: "546px",
  height: "101px",
  backgroundColor: "#C7F5FF",
  left: "316px",
});
