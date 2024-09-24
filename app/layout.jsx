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
        {/* Add favicon */}
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
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
