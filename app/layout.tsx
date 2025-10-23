
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import {Navbar} from "./navbar/page";
import Footer from "@/app/footer/footer";

import { Suspense } from "react";
import Loading from "./loading";


const geistSans = Geist({
  variable: "--font-geist-sans",
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
   <body className={`${geistSans.variable}  bg-gray-600 `}
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
