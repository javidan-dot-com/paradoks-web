import { Theme } from "@mui/material";

export const ScrollOneStyles = (theme: Theme) => ({
  fontWeight: 700,
  // color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: "23px",
});

export const ScrollOneContainerStyles = (theme: Theme) => ({
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  flexDirection: "column",
  justifyItems: "center",
  height: "100vh",
  top: "20px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
});

export const ScrollOneHeaderContainerStyles = (theme: Theme) => ({
  position: "relative",
  justifyContent: "center",
  width: "100%",
  height: "101px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  whiteSpace: "wrap",
  // left: "216px",
});

export const ScrollBox = (theme: Theme) => ({
  display: "flex",
  position: "relative",
  justifyContent: "flex-start",
  flexDirection: "row",
  width: "100%",
  height: "100%",
});
