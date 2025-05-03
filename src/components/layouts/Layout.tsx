import { Header } from "@/components/layouts/header";
import { Footer } from "./footer/Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
