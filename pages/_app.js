import React from "react";
import App from "next/app";
import "../css/main.css";
import Head from "next/head";
import { constants } from "../js/constants";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{constants.appName} - Application Status</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
