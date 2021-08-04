import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "@/utils/queryClient";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Twitch Clips Manager</title>
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </>
);

export default MyApp;
