import MainLayout from "@/components/MainLayout";
import "./globals.css";
import Head from "next/head"; // Import the Head component

export const metadata = {
  title: "Always On QR",
  description: "Always on QR landing page created with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon.ico for cross-browser compatibility */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Optionally, include PNG for Chrome or other browsers */}
        <link
          rel="icon"
          href="/images/FavIcon.png"
          type="image/png"
          sizes="32x32"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-slate-300">
        <MainLayout />
        {children}
      </body>
    </html>
  );
}
