import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "PICT MUN - Think • Discuss • Prosper",
  description: "Website of PICT MUN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${montserrat.variable} flex flex-col min-h-screen bg-[#232A2F] `}>
        <Navbar/>
        <main className="bg-[#70163c]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
