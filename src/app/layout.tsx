import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pousada SaaS",
  description: "Plataforma para gestão completa de pousada"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
