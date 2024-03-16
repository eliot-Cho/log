import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "pretendard/dist/web/static/pretendard.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
