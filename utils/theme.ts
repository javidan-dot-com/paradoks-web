import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: "#C7F5FF",
      paper: "#E8FFD1",
    },
  },
  typography: {
    fontFamily: ['"Futura PT, sans-serif"'].join(","),
  },
});

export default theme;
