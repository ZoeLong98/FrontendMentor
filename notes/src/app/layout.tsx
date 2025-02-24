import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="flex items-start h-screen w-screen bg-white text-black">
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
