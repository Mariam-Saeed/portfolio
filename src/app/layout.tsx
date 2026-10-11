import type { Metadata } from "next";

import "./globals.css";

import { Instrument_Serif, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
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
    <html
      lang="en"
      className="h-full scroll-smooth motion-reduce:scroll-auto"
      data-scroll-behavior="smooth"
    >
      <body className={`${manrope.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
