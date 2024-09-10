import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AirBnB Clone Project</title>
        <meta charSet="utf-8" />
        <meta name="description" content="AirBnB Clone" />
        <meta name="author" content="Chanwoo Lee" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
