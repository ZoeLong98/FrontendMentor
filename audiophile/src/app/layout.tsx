"use client";
// import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "@/components/NavigationHeader";
import NavigationFooter from "@/components/NavigationFooter";
import { AnimatePresence } from "framer-motion";

// export const metadata: Metadata = {
//   title: "AudioPhile",
//   description: "listen to the world",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col  min-h-screen">
        <NavigationHeader />
        <AnimatePresence mode="wait">
          <main className="flex-grow w-full">{children}</main>
        </AnimatePresence>
        <NavigationFooter />
      </body>
    </html>
  );
}
