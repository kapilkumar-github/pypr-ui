import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";

import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pypr — Build a resume that stands out",
  description:
    "Build a beautiful, professional resume with Pypr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-mono", jetbrainsMono.variable)}>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}