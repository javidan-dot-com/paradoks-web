import { Theme } from "@mui/material";

export const TeamStyles = (theme: Theme) => ({
  fontWeight: 700,
  // color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const TeamContainerStyles = (theme: Theme) => ({
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  flexDirection: "column",
  justifyContent: "center",
  justifyItems: "center",
  height: "100vh",
  width: "100%",
  rowGap: "80px",
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
  },
});
