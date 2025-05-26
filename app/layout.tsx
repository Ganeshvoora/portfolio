import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venkata Sai Ganesh Voora | Full-Stack Developer | MERN, Next.js, AI/ML Expert",
  description:
    "Venkata Sai Ganesh Voora is a passionate full-stack developer specializing in MERN stack and Next.js, with experience in AI/ML and cybersecurity projects. Explore his portfolio and projects.",
  keywords: [
    "Venkata Sai Ganesh Voora",
    "Ganesh Voora",
    "Full-stack developer",
    "MERN stack developer",
    "Next.js developer",
    "AI developer",
    "Machine learning",
    "Cybersecurity projects",
    "Web development portfolio",
  ],
  authors: [{ name: "Venkata Sai Ganesh Voora" }],
  creator: "Venkata Sai Ganesh Voora",
  openGraph: {
    title: "Venkata Sai Ganesh Voora | Full-Stack Developer Portfolio",
    description:
      "Discover the portfolio of Venkata Sai Ganesh Voora, expert in MERN stack, Next.js, AI/ML, and cybersecurity. See projects and skills.",
    url: "https://vooravenkatasaiganesh.netlify.app/",
    siteName: "Ganesh Voora's Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Venkata Sai Ganesh Voora Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Sai Ganesh Voora | Full-Stack Developer",
    description:
      "Full-stack developer specializing in MERN stack, Next.js, AI/ML, and cybersecurity projects.",
    creator: "@ganesh_voora",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}