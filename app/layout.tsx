import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";

// app/layout.tsx
export const metadata :Metadata= {
  title: "Liwa Lemjid - Devops Engineer",
  description:
    "Welcome to the official website of Liwa Lemjid, a Devops engineer.",
  keywords: [
    "Liwa Lemjid",
    "Devops Engineer",

  ],
  authors: [{ name: "Liwa Lemjid" }],
  verification: {
    google: '4rVBEIEauBbk_S-bDqsPZtXcw2UAfoWMuvuMm3R8LLM'
  },
  openGraph: {
    title: "Liwa Lemjid - Devops Engineer",
    description:
      "Explore the work of Liwa Lemjid, an expert in Devops.",
    url: "https://liwa-rho.vercel.app/", // 👉 replace with your real domain
    siteName: "Liwa Lemjid",
    images: [
      {
        url: "https://liwa-rho.vercel.app/profile.png", // must resolve to /public/profile.png
        width: 1200,
        height: 630,
        alt: "Liwa Lemjid Profile",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // JSON-LD structured data
  other: {
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Liwa Lemjid",
      jobTitle: "Devops Engineer",
      url: "https://liwa-rho.vercel.app/", // 👉 replace with real domain
      sameAs: [
        "https://www.linkedin.com/in/louam-lemjid-466435206/",
        "https://github.com/louamlemjid",
      ],
    }),
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
        
      >
        <Navbar/>
        <div className="flex flex-row gap-4">
          <AppSidebar/>
          {children}
        </div>
      </body>
    </html>
  );
}
