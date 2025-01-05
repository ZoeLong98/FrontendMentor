"use client";
// import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "@/components/NavigationHeader";
import NavigationFooter from "@/components/NavigationFooter";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "AudioPhile",
//   description: "listen to the world",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="flex flex-col  min-h-screen">
        <NavigationHeader />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <main className="flex-grow w-full">{children}</main>
          </motion.div>
        </AnimatePresence>
        <NavigationFooter />
      </body>
    </html>
  );
}
