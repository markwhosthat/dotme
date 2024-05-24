import type { Metadata } from "next";
import "./globals.css";

import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ subsets: ["latin"], weight: ["400"], display: 'swap'});

export const metadata: Metadata = {
  title: "dotme",
  description: "A website about Mark Polner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.className}>{children}</body>
    </html>
  );
}
