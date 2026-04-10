import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
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
  title: "Muhammad Farhan — Full-Stack Developer & AI Automation",
  description:
    "I build products that ship and automations that save you hours. Full-stack development, AI agents, and smart automation — built fast, built right.",
  icons: {
    icon: "/portfolio-avatar-icon.png",
    apple: "/portfolio-avatar-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
