import { ReactNode } from "react";
import Navigation from "./Navigation";
import CreedBlock from "./CreedBlock";
import TelegramChatButton from "./TelegramChatButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 min-h-screen">{children}</main>
      <CreedBlock />
      <TelegramChatButton />
    </div>
  );
}
