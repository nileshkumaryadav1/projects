import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivaay Developers | Finder Groups - College finder | Academic finder | Movie finder | Blog writing | Portfolio",
  description: "Generated by create next app & Developed by Shivaay developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="font-[family-name:var(--font-geist-mono)]">{children}</main>
      </body>
    </html>
  );
}
