import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { defaultSEO } from "@/lib/SEO";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>
          <ScrollProgressBar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
