import { Theme } from "@mui/material";

export const ScrollThreeStyles = (theme: Theme) => ({
  fontWeight: 700,
  // color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const ScrollThreeContainerStyles = (theme: Theme) => ({
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
});
