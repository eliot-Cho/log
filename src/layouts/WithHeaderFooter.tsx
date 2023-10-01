import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const WithHeaderFooter = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
