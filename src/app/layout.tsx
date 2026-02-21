import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acadly — The Complete Teaching Platform",
  description:
    "The complete teaching platform for modern classrooms. Attendance, engagement, and learning — all in one place. Trusted by 200+ institutions.",
  metadataBase: new URL("https://acadly.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-[73px]">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
