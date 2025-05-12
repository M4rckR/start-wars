import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Wars - Información Galáctica",
  description: "Toda la información sobre la saga de Star Wars, personajes, planetas y naves espaciales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
