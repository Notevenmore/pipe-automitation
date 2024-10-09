import React from "react";
import Head from "next/head";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : "Pipe Optimization"}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>
      <header>
        <nav className="flex flex-row items-center justify-between px-20 py-6 text-black shadow-lg shadow-slate-200">
          <div className="flex flex-row items-center justify-start gap-2">
            <Image src="/images/logo.jpg" alt="Pipeline Optimize Logo" width={21} height={21} />
            <h1 className={`font-bold text-xl`}>Pipeline Optimize</h1>
          </div>
          <ul className="flex flex-row items-center justify-center gap-5">
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
