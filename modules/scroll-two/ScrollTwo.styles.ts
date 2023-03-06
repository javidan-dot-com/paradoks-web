import { Theme } from "@mui/material";

export const ScrollTwoStyles = (theme: Theme) => ({
  fontWeight: 350,
  color: "black",
  fontSize: "19px",

  fontFamily: theme.typography.fontFamily,
});

export const ScrollTwoContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  justifyItems: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#E8FFD1",
});
