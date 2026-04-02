import type { Metadata } from "next";
import {
  Be_Vietnam_Pro,
  IBM_Plex_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";

const display = Source_Serif_4({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Trình chiếu BMAD Method",
  description:
    "Website trình chiếu tương tác theo từng slide cho BMAD Method.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
