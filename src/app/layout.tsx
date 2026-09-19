import type { Metadata } from "next";
import { Bricolage_Grotesque, Cinzel, Quicksand } from "next/font/google";
import "./globals.css";

const body = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const title = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-title", display: "swap" });
const soft = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-soft", display: "swap" });
export const metadata: Metadata = { title: "Brava Spa Urbano | Praia Brava", description: "Experiências de cuidado, relaxamento e bem-estar na Praia Brava, em Itajaí.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" /></head><body className={`${body.variable} ${title.variable} ${soft.variable}`}>{children}</body></html>; }
