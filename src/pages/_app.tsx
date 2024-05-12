import "@/styles/globals.css";
import { NextPage } from "next";

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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <main>{getLayout(<Component {...pageProps} />)}</main>;
}
