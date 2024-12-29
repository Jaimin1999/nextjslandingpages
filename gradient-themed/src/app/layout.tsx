import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brands.io",
  description: "Brands.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-white sm:bg-[url('/img/backgrounds/new_design3.png')] bg-cover bg-top`}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
        <PopupWidget />
      </body>
    </html>
  );
}
