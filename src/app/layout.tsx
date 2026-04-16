import type { Metadata } from "next";
import { Faustina, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const faustina = Faustina({
  variable: "--faustina",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syslab.ai",
  description: "Develop by Syslab.ai",
  icons: {
    icon: "/whitelogo.svg",
    shortcut: "/whitelogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${faustina.variable} ${jakarta.variable} font-giestMono antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
