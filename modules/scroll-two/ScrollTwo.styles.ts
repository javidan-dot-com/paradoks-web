import { Theme } from "@mui/material";

export const ScrollTwoStyles = (theme: Theme) => ({
  fontWeight: 350,
  fontSize: "19px",

  fontFamily: theme.typography.fontFamily,
});

export const ScrollTwoContainerStyles = (theme: Theme) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
});
