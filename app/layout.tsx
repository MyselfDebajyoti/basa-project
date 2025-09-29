import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BASA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-W5QG2M83B9" />
      </body>
    </html>
  );
}
