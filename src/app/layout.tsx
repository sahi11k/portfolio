import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "sahilk.",
  description: "Sahil Kumar's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="font-sans bg-bg-surface text-text-base">
        <div className="flex flex-col min-h-screen mx-auto w-[90%] max-w-7xl relative">
          <Navbar />
          <main className="flex-1 flex flex-col gap-6 mb-6 md:mb-12 md:gap-12 xl:gap-24 xl:mb-24">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
