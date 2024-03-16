import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={"max-w-2xl m-auto py-12 px-5"}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
