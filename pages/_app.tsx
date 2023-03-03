import { getDesignTokens } from "@/utils/theme";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  Menu,
  MenuItem,
} from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [openMenu, setOpenMenu] = useState(null);
  const HandleMenu = () => {
    setOpenMenu(true);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  <Menu open={openMenu} onClose={closeMenu}>
    <MenuItem onClick={closeMenu}>home</MenuItem>
    <MenuItem onClick={closeMenu}>articles</MenuItem>
    <MenuItem onClick={closeMenu}>karta</MenuItem>{" "}
  </Menu>;
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
