import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {white} from "next/dist/lib/picocolors";
import {Toaster} from "sonner";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-Powered Platform for preparing fro mock Interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${MonaSans.className} antialiased pattern`}
      >
        {children}
      <Toaster />
      </body>
    </html>
  );
}
