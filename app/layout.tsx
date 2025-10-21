
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar} from "./navbar/page";
import {Footer} from "./components/general/footer";

import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clash Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
   <body className={`${geistSans.variable}   `}
>
  
  {/* 🌟 Main content */}
  <Suspense fallback={<Loading />}>
    <Navbar />
    {children}
    <Footer />
  </Suspense>
</body>


  </html>
);

}
