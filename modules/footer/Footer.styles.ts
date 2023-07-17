import { Theme } from "@mui/material";

export const FooterStyles = (theme: Theme) => ({
  fontWeight: 500,
  // color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const FooterContainerStyles = (theme: Theme) => ({
  display: "flex",
  paddingRight: "4rem",
  paddingLeft: "4rem",
  paddingBottom: "4rem",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "253px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
});
