import { green, purple, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: grey[100],
            team: "red",
          },
          divider: purple[200],
          text: {
            primary: "black",
            secondary: "black",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#1C1C28",
          },
          divider: green[200],
          text: {
            primary: "white",
            secondary: "white",
          },
        }),
  },
});
