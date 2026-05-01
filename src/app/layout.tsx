import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PROFILE } from "@/content";
import "@styles/global.css";

export const metadata: Metadata = {
  title: PROFILE.siteTitle,
  description: PROFILE.metadataDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="font-sans bg-bg-surface text-text-base relative">
        <Navbar />
        <main className="flex flex-col min-h-screen mx-auto w-[90%] max-w-7xl gap-24 mb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
