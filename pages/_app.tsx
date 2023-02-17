import theme from "@/utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../modules/nav/Navbar";
import Main from "../modules/main/Main";
import Footer from "../modules/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <Main />
      <Footer />

      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
