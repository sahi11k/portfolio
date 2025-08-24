import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "Sahil Kumar",
  description: "Sahil's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-neutral-900">
        <div className="flex flex-col min-h-screen max-w-[70%] m-auto">
          <Navbar />
          <main className="flex-1 flex flex-col gap-20 mb-20">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
