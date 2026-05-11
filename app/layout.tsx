import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VIR Electric | EV Charger Installation Oahu",
  description:
    "Licensed, insured EV charger installation on Oahu, Hawaii. Bronze, Gold & Platinum packages starting at $405. Next-day available. Call 808-400-8744.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
