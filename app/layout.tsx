import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "tw-animate-css";

export const metadata: Metadata = {
  title: "Soremi Ayomide - Software Engineer & Product Designer",
  description:
    "Software Engineer & Product Designer with 5 years of experience building amazing SaaS products",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
