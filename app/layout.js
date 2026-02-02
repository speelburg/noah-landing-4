// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "noah sacré",
  description: "a model idiot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#E16A8C" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#E16A8C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-[#f5c747]`}>
        {/* Site-wide background video (behind everything) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/bg-poster.jpg"
          aria-hidden="true"
          className="pointer-events-none select-none fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/noahsacrebackground2.webm" type="video/webm" />
          <source src="/videos/noahsacrebackground2.mp4" type="video/mp4" />
        </video>

        {/* All page content above the video */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
