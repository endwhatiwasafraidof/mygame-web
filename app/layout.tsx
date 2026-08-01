import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { brandFaviconSrc, brandName } from "@/lib/constants/branding";

import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: brandName,
  description: `Игровой лендинг и веб-приложение проекта ${brandName}.`,
  icons: {
    icon: [{ url: brandFaviconSrc, type: "image/x-icon", sizes: "any" }],
    shortcut: [brandFaviconSrc],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${orbitron.variable} ${manrope.variable} font-sans`}>
        <div className="relative min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
