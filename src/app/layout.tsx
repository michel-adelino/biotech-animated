import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text, Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  weight: ["300", "400", "500"],
  variable: "--font-display",
  subsets: ["latin"],
});

const redHatText = Red_Hat_Text({
  weight: ["300", "400", "500"],
  variable: "--font-text",
  subsets: ["latin"],
});

const redHatMono = Red_Hat_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biomol Visual",
  description: "Molecular & Cellular MOA Visualization That Gets You Funded",
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${redHatText.variable} ${redHatMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
