import { Header } from "@/app/components/header";
import "./style.css";

import { Oxygen, Oxygen_Mono } from "next/font/google";

const Sans = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-sans",
});

const Mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Sans.variable} ${Mono.variable}`}>
      <body className="bg-bg-0 font-sans text-fg-0">
        {/* Layout UI */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
