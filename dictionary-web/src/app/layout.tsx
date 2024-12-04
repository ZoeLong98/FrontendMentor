"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="dark:bg-black min-h-screen">
          {children}
          <div className="text-sm text-center">
            Challenge by{" "}
            <a href="https://www.frontendmentor.io/profile/ZoeLong98">
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://www.frontendmentor.io/profile/ZoeLong98">Zoe</a>.
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
