import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Parashar — Healthcare × Technology",
  description:
    "Portfolio of Ayush Parashar, an Information Science engineer pursuing Healthcare Management at Goa Institute of Management.",
  keywords: [
    "Ayush Parashar",
    "healthcare technology",
    "healthcare management",
    "web developer",
    "data analytics",
    "Salesforce",
    "Power BI",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
