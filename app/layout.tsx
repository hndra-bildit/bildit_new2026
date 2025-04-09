import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from 'next/font/local'

import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

const mainFont = localFont({
  src:'../public/fonts/Uncut-Sans/UncutSans-Regular.woff2',
  display:'swap',
})

export const metadata: Metadata = {
  title: "BILDIT | Content Management System for Mobile Apps and React Web Sites",
  description: "Content Management System for Mobile Apps and React Web Sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased relative`}
      >
        <Header/>
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
