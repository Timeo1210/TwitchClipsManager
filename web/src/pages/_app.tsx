import React from "react";
import Head from 'next/head'
import type { AppProps } from 'next/app'
import "@/styles/globals.css"

const MyApp = ({Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Twitch Clips Manager</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
