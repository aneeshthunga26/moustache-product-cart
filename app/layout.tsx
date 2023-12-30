import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Page",
  description: "Product description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main className="m-auto min-w-[300px] max-w-6xl p-4">{children}</main>
      </body>
    </html>
  );
}
