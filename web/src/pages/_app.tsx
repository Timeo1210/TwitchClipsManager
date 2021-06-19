import React from "react";
import "../styles/globals.css"
import Head from 'next/head'
import type { AppProps } from 'next/app'

const MyApp = ({Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Twitch Clips Manager</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
