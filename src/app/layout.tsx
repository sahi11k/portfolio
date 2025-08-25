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
        <div className="flex flex-col min-h-screen max-w-[75%] m-auto">
          <Navbar />
          <main className="flex-1 flex flex-col gap-24 mb-24">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
