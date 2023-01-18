import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { default as h } from "../hooks/Okra";
// import { gsap } from "gsap";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../public/font-awesome-5.15.4/css/all.min.css";
import "../public/uicons/uicons-regular-straight.css";

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.NEXT_PUBLIC_THEME_MAIN,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {h.getPageTitle(pageProps)}
          {process.env.NEXT_PUBLIC_APP_NAME} &reg;
        </title>
        <meta name="description" content={process.env.NEXT_PUBLIC_APP_ABOUT} />
        <meta name="keywords" content={process.env.NEXT_PUBLIC_APP_KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
