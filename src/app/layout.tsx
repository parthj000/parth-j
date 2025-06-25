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

// SEO + Open Graph
export const metadata: Metadata = {
  title: "Parth Joshi | Full Stack Developer & App Builder",
  description:
    "Portfolio of Parth Joshi, a full stack and app developer specializing in React, Next.js, Node.js, and modern scalable applications.",
  keywords: [
    "Parth Joshi",
    "Full Stack Developer",
    "App Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Developer",
    "MongoDB",
    "JavaScript Developer",
    "TypeScript",
    "Developer Portfolio",
    "Software Engineer",
    "Firebase Developer",
  ],
  authors: [{ name: "Parth Joshi", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Parth Joshi | Full Stack Developer",
    description:
      "Explore projects and experience of Parth Joshi, a full stack and app developer building cutting-edge web/mobile solutions.",
    url: "https://yourdomain.com",
    siteName: "Parth Joshi Portfolio",
    images: [
      {
        url: "/og-image.png", // Put this in your public folder
        width: 1200,
        height: 630,
        alt: "Parth Joshi Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/profile.ico", // Custom favicon
    shortcut: "/profile.ico",
    apple: "/profile.png",
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
        className={`${geistSans.variable} ${geistMono.variable}  scroll-smooth antialiased [scroll-padding-top:80px]`}
      >
        {children}
      </body>
    </html>
  );
}
