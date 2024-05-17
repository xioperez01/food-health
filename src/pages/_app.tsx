import "@/styles/globals.css";
import { NextPage } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";

import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = {
  Component: NextPageWithLayout;
  pageProps: {};
};

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>FoodHealth</title>
  <meta name="description" content="Food App"/>
      </Head>
      <main className={font.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}
