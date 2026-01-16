import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Listing Page (PLP) | Appscrip Frontend Task",
  description:
    "A responsive Product Listing Page built using Next.js with Server Side Rendering (SSR), SEO optimization, and API-driven data for the Appscrip frontend technical assessment.",
  keywords: [
    "Product Listing Page",
    "PLP",
    "Appscrip Task",
    "Next.js SSR",
    "Frontend Assessment",
    "React PLP",
  ],
  authors: [{ name: "P.S. Mohammed Sowban" }],
  openGraph: {
    title: "Product Listing Page (PLP) | Appscrip Frontend Task",
    description:
      "Next.js based Product Listing Page with SSR, responsive design, and SEO best practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SchemaMarkup />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
