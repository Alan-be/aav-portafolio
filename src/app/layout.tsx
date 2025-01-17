import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/atoms/Navbar/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Alan",
  description: "Este es un portafolio de Alan Arevalo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar/>
      <AntdRegistry>
        {children}
      </AntdRegistry>
      </body>
    </html>
  );
}
