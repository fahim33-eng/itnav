import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ITNAV Recruit - ITで生きる、はじまりの場をつくる",
  description: "イトナブは地方都市部で潜在的能力がある若者に、プログラミング教育を通じて挑戦する力を身に付ける場所です。",
  icons: {
    icon: "/itnav_logo.png",
    shortcut: "/itnav_logo.png",
    apple: "/itnav_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
