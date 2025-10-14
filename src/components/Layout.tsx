import { ReactNode } from "react";
import Navigation from "./Navigation";
import CreedBlock from "./CreedBlock";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">{children}</main>
      <CreedBlock />
    </div>
  );
}
