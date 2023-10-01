import { AppProps } from "next/app";
import "../styles/globals.css";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <main className={"m-auto max-w-[680px] px-4 py-8"}>
      <Component {...pageProps} />
    </main>
  );
};
