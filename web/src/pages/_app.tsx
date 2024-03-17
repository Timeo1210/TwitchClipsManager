import { StrictMode } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "@/utils/queryClient";
import "@/styles/globals.css";
import "@/styles/react-datepicker/custom-react-datepicker.css";
import { Analytics } from "@vercel/analytics/react";

// static-cdn.jtvnw.net *.twitch.tv
const CSP = `
default-src 'self' ;
script-src 'self' ${
  process.env.NODE_ENV === "production" ? "" : "'unsafe-eval'"
} ;
style-src 'self' 'unsafe-inline' ;
img-src 'self' static-cdn.jtvnw.net *.twitch.tv data: ;
connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL}`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Twitch Clips Manager</title>
          <meta
            name="description"
            content="Tool that let you download and manage twitch's VODs and clips"
          />
          <meta httpEquiv="Content-Security-Policy" content={CSP} />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
        <Analytics />
      </QueryClientProvider>
    </StrictMode>
  </>
);

export default MyApp;
