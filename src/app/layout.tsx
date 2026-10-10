import type { Metadata } from "next";

import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariam Saeed | Frontend Developer",
  description:
    "Frontend Developer specializing in Vue.js, Nuxt.js, and modern web development. Explore my projects, technical skills, and open-source contributions.",
};

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
