import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Venkata Sai Ganesh Voora | Full-Stack Developer",
  description: "Full-stack developer with expertise in MERN stack, Next.js, and experience in AI/ML and cybersecurity projects.",
  keywords: ["web development", "full-stack developer", "MERN stack", "Next.js", "AI/ML", "cybersecurity"],
  authors: [{ name: "Voora Venkata Sai Ganesh" }],
  creator: "Voora Venkata Sai Ganesh",
  openGraph: {
    title: "Venkata Sai Ganesh Voora | Full-Stack Developer",
    description: "Full-stack developer with expertise in MERN stack, Next.js, and experience in AI/ML and cybersecurity projects.",
    url: "https://vooravenkatasaiganesh.netlify.app/",
    siteName: "Ganesh Voora's Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Ganesh Voora - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Sai Ganesh Voora | Full-Stack Developer",
    description: "Full-stack developer with expertise in MERN stack, Next.js, and experience in AI/ML and cybersecurity projects.",
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
  themeColor: "#10b981", // Emerald color
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
        {children}
      </body>
    </html>
  );
}