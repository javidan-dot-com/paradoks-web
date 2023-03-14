import { Theme } from "@mui/material";

export const ScrollFourStyles = (theme: Theme) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: "35px",
});

export const ScrollFourContainerStyles = (theme: Theme) => ({
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "pink",
  rowGap: "80px",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
  },
});
