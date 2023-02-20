import { Theme } from "@mui/material";

export const FooterStyles = (theme: Theme) => ({
  fontWeight: 500,
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
});

export const FooterContainerStyles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  height: "253px",
  width: "100%",
  backgroundColor: "#C9FFD5",
});
