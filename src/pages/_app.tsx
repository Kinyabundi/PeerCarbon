import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/Layout";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <main className={poppins.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>
          {`
          :root {
            --font-poppins: ${poppins.style.fontFamily}, 'Poppins';
          }
          `}
        </style>
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </main>
  );
}
