import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
import { useEffect } from "react";

nProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
    const handleStart = () => {
      nProgress.start();
    };

    const handleComplete = () => {
      nProgress.done();
    }

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.on('routeChangeStart', handleStart);
      Router.events.on('routeChangeComplete', handleComplete);
      Router.events.on('routeChangeError', handleComplete);
    };
  }, [])

  return <Component {...pageProps} />;
}
