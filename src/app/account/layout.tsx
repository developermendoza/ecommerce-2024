import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Footer from "@/components/Footer";
import { AccountNavbar } from "@/ui/navbars";
import { AccountFooter } from "@/ui/footers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AccountNavbar />
      {children}
      <AccountFooter />
    </section>
  );
}
